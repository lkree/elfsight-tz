export type TInputFilter = { type: 'input', placeHolderText: string };
export type TSelectFilter = { type: 'select', options: string[] };

export type IFilter = TInputFilter | TSelectFilter;

export enum Filters {
    Name = 'name',
    Status = 'status',
    Species = 'species',
    Gender = 'gender',
    Type = 'type'
}

export const FILTER_TYPES: Record<Filters, IFilter> = {
    [Filters.Name]: {
        type: 'input',
        placeHolderText: 'как зовут?'
    },
    [Filters.Type]: {
        type: 'input',
        placeHolderText: 'какой тип?'
    },
    [Filters.Species]: {
        type: 'input',
        placeHolderText: 'какая раса?'
    },
    [Filters.Status]: {
        type: 'select',
        options: ['Alive', 'Dead', 'unknown']
    },
    [Filters.Gender]: {
        type: 'select',
        options: ['male', 'female', 'genderless', 'unknown']
    }
}
