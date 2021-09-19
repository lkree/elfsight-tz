import { CHARACTER_URL, getCurrentPageNumber, getUrlWithPageNumber, ILoadMeta } from '../../../common';
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


export const getNextPage = (dispatch: Function, pageType: TPageType, meta: ILoadMeta) => {
    switch (pageType) {
        case 'first':
            return downloadData(dispatch);
        case 'next':
            return downloadData(dispatch, { url: meta.next });
        case 'last':
            return downloadData(dispatch, { url: getUrlWithPageNumber(CHARACTER_URL, meta.pages) });
        case 'prev':
            return downloadData(dispatch, { url: getUrlWithPageNumber(CHARACTER_URL, +getCurrentPageNumber(meta) - 1) });
    }
}
