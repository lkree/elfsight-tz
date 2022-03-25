import { ICharacter, ILoadResult } from '../../../common';
import { Actions } from './actions';

export type TPageType = 'next' | 'prev' | 'first' | 'last';

export interface IDownloadData {
    url: string;
    resolve: (data: any) => any;
    reject: (data: string) => any;
}

export interface SetData {
    type: Actions.SetData;
    payload: ILoadResult;
}

export interface SetIsLoading {
    type: Actions.SetIsLoading;
    payload: boolean;
}

export interface SetError {
    type: Actions.SetError;
    payload: string;
}

export interface GetItem {
    type: Actions.GetItem;
    payload: {
        id: number;
    } & Partial<Pick<IDownloadData, 'resolve' | 'reject'>> & Pick<IDownloadData, 'resolve'>;
}

export interface IProcessInfo {
    isLoading: boolean;
    error: string | null;
}

export interface IState {
    processInfo: IProcessInfo;
    renderData: ICharacter[];
    characterData?: ICharacter;
    meta: ILoadResult['info'];
}

export type TActions = SetData | SetError | SetIsLoading | GetItem;
