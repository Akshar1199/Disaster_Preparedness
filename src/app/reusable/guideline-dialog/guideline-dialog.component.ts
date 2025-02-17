import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-guideline-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCardModule],
  templateUrl: './guideline-dialog.component.html',
  styleUrl: './guideline-dialog.component.css'
})
export class GuidelineDialogComponent {

  suggestionForm: FormGroup;
  dialogTitle: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GuidelineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogTitle = data.mode === 'edit' ? 'Edit Suggestion' : 'Add Suggestion'; // Set title dynamically

    this.suggestionForm = this.fb.group({
      suggestion: [data.suggestions ?? '', Validators.required] // Ensure default value
    });

    console.log("Dialog Data Received:", data);
  }

  submit() {
    if (this.suggestionForm.valid) {
      this.dialogRef.close(this.suggestionForm.value.suggestion);
    }
  }

  cancel() {
    this.dialogRef.close(undefined);
  }
}
