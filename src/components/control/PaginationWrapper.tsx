import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useActions, useTypedSelector } from '../../hooks';
import { getCurrentPageNumber } from '../../common';
import { TPageType } from '../../store/reducers';
import { getDataState } from '../../selectors';
import { FC, useCallback } from 'react';

export const PaginationWrapper: FC = () => {
    const { processInfo, meta } = useTypedSelector(getDataState);
    const { getNextPage, setIsLoading } = useActions();
    const getPage = useCallback((pageType: TPageType) => {
        setIsLoading(true);
        getNextPage(pageType, meta);
    }, [meta, getNextPage, setIsLoading]);

    if (processInfo.isLoading || meta?.pages < 2) {
        return <></>;
    }

    const currentPage = getCurrentPageNumber(meta);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === meta.pages;

    return (
        <Pagination className='pt-2'>
            <PaginationItem disabled={ isFirstPage }>
                <PaginationLink href='#'
                                onClick={ () => getPage('first') }>{ '<<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isFirstPage }>
                <PaginationLink href='#'
                                onClick={ () => getPage('prev') }>{ '<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink>{ currentPage }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isLastPage }>
                <PaginationLink href='#'
                                onClick={ () => getPage('next') }>{ '>' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isLastPage }>
                <PaginationLink href='#'
                                onClick={ () => getPage('last') }>{ '>>' }</PaginationLink>
            </PaginationItem>
        </Pagination>
    )
};
