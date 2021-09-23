import { reducers, initialState, IState, TActions } from './reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { default as thunk, ThunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, {}, applyMiddleware(thunk as ThunkMiddleware<IState, TActions>));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { initialState };
export type { IState };
