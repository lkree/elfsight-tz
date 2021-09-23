import {
    dataReducer, actionCreators as dataActionCreators, initialState as dataState, IState as IDataState, TActions as DataActions
} from './dataReducer';
import {
    popupReducer, actionCreators as popupActionCreators, initialState as popupState, IState as IPopupState, TActions as PopupActions
} from './popupReducer';
import {
    filterReducer, actionCreators as filterActionCreators, initialState as filterState, IState as IFilterState, TActions as FilterActions
} from './filterReducer';

export const initialState = {
    ...dataState,
    ...popupState,
    ...filterState
}

export const reducers = {
    dataReducer,
    popupReducer,
    filterReducer
}

export const actionCreators = {
    ...dataActionCreators,
    ...popupActionCreators,
    ...filterActionCreators
}

export interface IState extends IDataState, IPopupState, IFilterState {}
export type TActions = DataActions & PopupActions & FilterActions;

export type { TPageType } from './dataReducer';
