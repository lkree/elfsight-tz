import { RootState } from '../store';

export const getPopupState = ({ popupReducer: { data } }: RootState) => ({ data });
