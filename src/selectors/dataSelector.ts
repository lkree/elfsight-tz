import { RootState } from '../store';
import { createSelector } from '../common';

export const getState = (state: RootState) => state.dataReducer;

export const getDataState = createSelector(getState, ({ characterData, renderData, processInfo, meta }) => ({
    characterData,
    renderData,
    processInfo,
    meta
}));

export const getError = createSelector(getState, ({ processInfo: { error } }) => error);
