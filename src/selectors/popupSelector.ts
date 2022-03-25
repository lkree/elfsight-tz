import { RootState } from '../store';
import { createSelector } from '../common';

export const getState = (state: RootState) => state.popupReducer;

export const getPopupState = createSelector(getState, ({ data }) => ({ data }));
