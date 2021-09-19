import { IState, TActions } from './interfaces';
import { Actions } from './actions';


export const initialState: IState = {
    processInfo: { isLoading: false, error: null },
    renderData: [],
    meta: {} as IState['meta']
}

export const dataReducer = (state: IState = initialState, action: TActions): IState => {
    switch (action.type) {
        case Actions.SetData:
            if (!action.payload.results) {
                return {
                    ...state,
                    renderData: [],
                    meta: {} as IState['meta'],
                    processInfo: { isLoading: false, error: 'К сожалению никто не нашёлся. Попробуй изменить параметры фильтрации.' }
                }
            }

            return {
                ...state,
                renderData: action.payload.results,
                meta: action.payload.info ?? {},
                processInfo: { isLoading: false, error: null }
            };
        case Actions.SetError:
            return {
                ...state,
                processInfo: { isLoading: false, error: action.payload }
            }
        case Actions.SetIsLoading:
            return {
                ...state,
                processInfo: { isLoading: action.payload, error: null }
            }
        default:
            return { ...state };
    }
}
