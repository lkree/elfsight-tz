import { IState, TActions } from './interfaces';
import { Actions } from './actions';


export const initialState: IState = {}

export const popupReducer = (state: IState = initialState, action: TActions): IState => {
    switch (action.type) {
        case Actions.Close:
            return initialState;
        case Actions.Open:
            return {
                data: action.data
            }
        default:
            return { ...state };
    }
}
