import { RootState } from '../store';
import { createSelector } from '../common';

export const getState = (state: RootState) => state.filterReducer;

export const getFilterState = createSelector(getState, ({ filters, isFiltered, hasChanges }) => ({
    filters,
    isFiltered,
    hasChanges
}));
