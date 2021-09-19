export type {
    Gender, Status, Species, ICharacter, ILoadResult, ILoadMeta, ParamsWithOutDispatch, SomeFunction
} from './interfaces';
export { getCurrentPageNumber,getUrlWithPageNumber, getUrlWithFilters } from './utils';
export type { IFilter, TInputFilter, TSelectFilter } from './filters';
export { COMMON_URL, CHARACTER_URL } from './constants';
export { FILTER_TYPES, Filters } from './filters';
