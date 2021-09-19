import { IState } from './interfaces';
import { Filters } from '../../../common';

export const getHasChanges = (state: IState) =>
    Object.keys(state.filters ?? []).some((k) => Boolean(state.filters?.[k as Filters]?.value));
