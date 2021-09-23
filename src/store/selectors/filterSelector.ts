import { RootState } from '../index';

export const getFilterState = ({ filterReducer: { filters, isFiltered, hasChanges } }: RootState) => ({
    filters,
    isFiltered,
    hasChanges
})
