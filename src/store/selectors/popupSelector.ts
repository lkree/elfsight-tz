import { RootState } from '../index';

export const getPopupState = ({ popupReducer: { isOpened, data } }: RootState) => ({ isOpened, data });
