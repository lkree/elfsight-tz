import { RootState } from '../store';

export const getFilterState = ({ filterReducer: { filters, isFiltered, hasChanges } }: RootState) => ({
    filters,
    isFiltered,
    hasChanges
})
