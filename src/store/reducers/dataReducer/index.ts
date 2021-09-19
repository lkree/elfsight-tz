export type { TActions, IState, SetData, SetError, TPageType, SetIsLoading, IProcessInfo } from './interfaces';
export { dataReducer, initialState } from './reducer';
export { actionCreators } from './actionCreators';
export { downloadData, getNextPage } from './utils';
export { Actions } from './actions';
