import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisasterService } from '../../services/disaster.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GuidelineDialogComponent } from '../../reusable/guideline-dialog/guideline-dialog.component';
import { Store } from '@ngrx/store';
import { selectDisasterByCategory } from '../../store/selectors/disaster.selector';


@Component({
  selector: 'app-guidelines',
  imports: [CommonModule, MatDialogModule, MatCardModule, MatListModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
  templateUrl: './guidelines.component.html',
  styleUrl: './guidelines.component.css',
})
export class GuidelinesComponent {
  @Input() disaster_category!: string;
  disasters: any;

  videoUrl: string = '';
  embedUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private store: Store<{disasters:any[]}>
  ) {}

  ngOnInit(): void {

    // this.disaster_category = this.route.snapshot.params['disasterName'];
    console.log(this.disaster_category);

    this.store.select(selectDisasterByCategory(this.disaster_category))
      .subscribe(selectedDisaster => {
        if (selectedDisaster) {
          console.log("ngon",selectedDisaster)
          this.disasters = selectedDisaster;
          this.videoUrl = selectedDisaster.linkUrl;
          console.log('Video URL:', this.videoUrl);
          this.convertToEmbedUrl();
        } else {
          console.error('No disaster found for the selected category.');
        }
      });
  }


  convertToEmbedUrl() {
    const videoId = this.extractVideoId(this.videoUrl);
    console.log("videoId",videoId);
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {
      alert('Invalid YouTube URL. Please enter a valid YouTube video link.');
    }
  }

  extractVideoId(url: string): string | null {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  openDialog(type: string): void {
    const dialogRef = this.dialog.open(GuidelineDialogComponent, {
      width: '300px',
      height: '200px',
      data: { suggestions: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (type === 'do') {
          this.disasters.guidelines.do.push(result);
        } else {
          this.disasters.guidelines.dont.push(result);
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
