import { useTypedSelector } from './useTypedSelector';
import { getDataState } from '../selectors';
import { useCallback } from 'react';
import { TPageType } from '../store/reducers';
import { useActions } from './useActions';

export const useGetPages = () => {
    const { meta } = useTypedSelector(getDataState);
    const { getNextPage: getNextPageAction, setIsLoading } = useActions();
    const getPage = useCallback((pageType: TPageType) => {
        setIsLoading(true);
        getNextPageAction(pageType, meta);
    }, [meta, getNextPageAction, setIsLoading]);
    const getFirstPage = useCallback(() => getPage('first'), [getPage]);
    const getLastPage = useCallback(() => getPage('last'), [getPage]);
    const getNextPage = useCallback(() => getPage('next'), [getPage]);
    const getPrevPage = useCallback(() => getPage('prev'), [getPage]);

    return { getFirstPage, getLastPage, getNextPage, getPrevPage };
}
