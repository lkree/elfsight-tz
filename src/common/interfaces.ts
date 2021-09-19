import { AppDispatch } from '../store';

export type Gender = 'male' | 'female' | 'genderless' | 'unknown';

export type Species = 'Humanoid';

export type Status = 'Dead' | 'Alive' | 'unknown';

export type SomeFunction = (...args: any) => any;
export type ParamsWithOutDispatch<T extends SomeFunction> = T extends (dispatch: AppDispatch, ...args: infer P) => any ? P : never;

interface ILink {
    name: string;
    url: string;
}

export interface ICharacter {
    name: string;
    created: Date;
    episode: string[];
    gender: Gender;
    id: number;
    image: string;
    location: ILink;
    origin: ILink;
    species: Species;
    status: Status;
    type: string;
    url: string;
}

export interface ILoadMeta {
    count: number;
    next: string;
    pages: number;
    prev: string;
}

export interface ILoadResult {
    info: ILoadMeta;
    results: Array<ICharacter>;
}
