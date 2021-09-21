import { CHARACTER_URL, getUrlWithPageNumber, ILoadMeta } from '../../../common';
import { actionCreators } from './actionCreators';
import { TPageType } from './interfaces';

interface IDownloadData {
    url?: string;
    actionSetSuccess?: (data: any) => any;
    actionSetError?: typeof actionCreators.setError;
}

export const downloadData = (
    dispatch: Function,
    {
        url = CHARACTER_URL,
        actionSetSuccess = actionCreators.setData,
        actionSetError = actionCreators.setError
    }: IDownloadData = {
        url: CHARACTER_URL,
        actionSetSuccess: actionCreators.setData,
        actionSetError: actionCreators.setError
    }
) => fetch(url)
        .then((r) => r.json())
        .then((result) => dispatch(actionSetSuccess(result)))
        .catch(() => actionSetError('something goes wrong'));

export function getNextPage(dispatch: Function, pageType: TPageType, meta: ILoadMeta): Promise<void> {
    switch (pageType) {
        case 'first':
            return downloadData(dispatch, { url: getUrlWithPageNumber(meta.prev, 1) });
        case 'next':
            return downloadData(dispatch, { url: meta.next });
        case 'last':
            return downloadData(dispatch, { url: getUrlWithPageNumber(meta.next, meta.pages) });
        case 'prev':
            return downloadData(dispatch, { url: meta.prev ?? CHARACTER_URL });
    }
}
