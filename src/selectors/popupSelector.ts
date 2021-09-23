import { RootState } from '../store';

export const getPopupState = ({ popupReducer: { isOpened, data } }: RootState) => ({ isOpened, data });
