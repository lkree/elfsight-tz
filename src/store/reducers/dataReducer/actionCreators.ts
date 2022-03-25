import { GetItem, IDownloadData, SetData, SetError, SetIsLoading, TPageType } from './interfaces';
import { CHARACTER_URL, getUrlWithPageNumber, ILoadMeta } from '../../../common';
import { AppDispatch } from '../../';
import { downloadData } from './utils';
import { Actions } from './actions';

const getData = (
    { url = CHARACTER_URL, resolve = setData, reject = setError }: Partial<IDownloadData> = { resolve: setData, reject: setError, url: CHARACTER_URL }
) => async (dispatch: AppDispatch) => dispatch(await downloadData({ url, resolve, reject }));

const setIsLoading = (payload: SetIsLoading['payload']): SetIsLoading => ({ type: Actions.SetIsLoading, payload });

const setData = (payload: SetData['payload']): SetData  => ({ type: Actions.SetData, payload });

const getItem = ({ id, resolve }: GetItem['payload']) => getData({ url: `${CHARACTER_URL}/${id}`, resolve });

const getNextPage = (pageType: TPageType, meta: ILoadMeta) => {
    switch (pageType) {
        case 'first':
            return getData({ url: getUrlWithPageNumber(meta.prev, 1) });
        case 'next':
            return getData({ url: meta.next });
        case 'last':
            return getData({ url: getUrlWithPageNumber(meta.next, meta.pages) });
        case 'prev':
            return getData({ url: meta.prev ?? CHARACTER_URL });
    }
};

const setError = (error: SetError['payload']): SetError => ({ type: Actions.SetError, payload: error });

export const actionCreators = { setIsLoading, setData, getNextPage, setError, getData, getItem };
