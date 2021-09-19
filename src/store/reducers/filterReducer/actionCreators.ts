import { SetFiltered, SetChanges, ResetFilters } from './interfaces';
import { Filters } from '../../../common';
import { Actions } from './actions';

interface ISetChangesProps {
    payload: string;
    filterType: Filters;
}

export const actionCreators = {
    setFiltered: (payload: boolean): SetFiltered => ({ type: Actions.SetFiltered, payload }),
    setChanges: ({ payload, filterType }: ISetChangesProps): SetChanges => ({ type: Actions.SetChanges, payload, filterType }),
    resetFilters: (): ResetFilters => ({ type: Actions.ResetFilters })
}
