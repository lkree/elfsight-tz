import { Filters } from '../../../common';
import { Actions } from './actions';

export interface SetFiltered {
    type: Actions.SetFiltered;
    payload: boolean;
}

export interface ResetFilters {
    type: Actions.ResetFilters;
}

export interface SetChanges {
    type: Actions.SetChanges;
    filterType: Filters;
    payload: string;
}

export type IState = {
    filters?: Partial<{ [K in Filters]: { value: string; }}>;
} & {
    isFiltered: boolean;
    hasChanges: boolean;
};

export type TActions = SetFiltered | SetChanges | ResetFilters;
