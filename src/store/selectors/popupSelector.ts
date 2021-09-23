import { RootState } from '../index';

export const getPopupState = ({ popupReducer: { status, children } }: RootState) => ({ status, children });
