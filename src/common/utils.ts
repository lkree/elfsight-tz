import { ILoadMeta } from './interfaces';
import { Filters } from './filters';
import { CHARACTER_URL } from './constants';

export const getCurrentPageNumber = (meta: ILoadMeta): number => {
    if (!meta.prev) return 1;
    if (!meta.next) return meta.pages;

    const result = meta.prev.split('page=');

    return +result[result.length - 1].split('&')[0] + 1;
}

export const getUrlWithPageNumber = (url: string, pageNumber: string | number) => `${url}?page=${pageNumber}`;

export const getUrlWithFilters = (filters: Partial<Record<Filters, { value: string }>> = {}) => {
    const filterNames = Object.keys(filters) as Filters[];
    const firstFilterName = filterNames[0];

    return `${CHARACTER_URL}?${firstFilterName}=${filters[firstFilterName]?.value}${
        filterNames
            .slice(1)
            .reduce((battery, filterName: Filters) => {
                battery += `&${filterName}=${filters[filterName]?.value}`;
                return battery;
            }, '')
    }`;
}
