import { IState, TActions } from './interfaces';
import { Actions } from './actions';
import { getHasChanges } from './utils';


export const initialState: IState = {
    isFiltered: false,
    hasChanges: false,
    filters: {} as IState['filters']
}

export const filterReducer = (state: IState = initialState, action: TActions): IState => {
    switch (action.type) {
        case Actions.ResetFilters:
        return {
            ...state,
            hasChanges: false,
            isFiltered: false,
            filters: {}
        }
        case Actions.SetFiltered:
            return {
                ...state,
                isFiltered: action.payload
            }
        case Actions.SetChanges:
            const newState = {
                ...state,
                filters: {
                    ...state.filters,
                    [action.filterType]: {
                        value: action.payload
                    }
                }
            };

            newState.hasChanges = getHasChanges(newState);

            return newState;
        default:
            return { ...state };
    }
}
