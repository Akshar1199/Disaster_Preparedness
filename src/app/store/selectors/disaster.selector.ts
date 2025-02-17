import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DisasterState } from "../reducers/disaster.reducer";


// export const selectDisasters = createFeatureSelector<any[]>('disasters');
export const selectDisasterState = createFeatureSelector<DisasterState>('disasters');

export const selectDisasters = createSelector(
  selectDisasterState,
  (state: DisasterState) => state.disasters
);

export const selectDisasterByCategory = (category: string) =>
  createSelector(
    selectDisasters,
    (disasters: any[]) => disasters.find(disaster => disaster.category === category)
  );
