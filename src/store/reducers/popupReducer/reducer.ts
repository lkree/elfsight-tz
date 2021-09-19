import { IState, TActions } from './interfaces';
import { Actions } from './actions';


export const initialState: IState = {
    status: 'closed',
    children: {} as IState['children']
}

export const popupReducer = (state: IState = initialState, action: TActions): IState => {
    switch (action.type) {
        case Actions.Close:
            return initialState;
        case Actions.Open:
            return {
                status: 'opened',
                children: action.children
            }
        default:
            return { ...state };
    }
}
