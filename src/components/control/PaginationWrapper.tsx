import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useGetPages, useTypedSelector } from '../../hooks';
import { getCurrentPageNumber } from '../../common';
import { getDataState } from '../../selectors';
import { FC, memo } from 'react';

export const PaginationWrapper: FC = memo(() => {
    const { processInfo, meta } = useTypedSelector(getDataState);
    const { getNextPage, getLastPage, getFirstPage, getPrevPage } = useGetPages();

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
                                onClick={ getFirstPage }>{ '<<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isFirstPage }>
                <PaginationLink href='#'
                                onClick={ getPrevPage }>{ '<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink>{ currentPage }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isLastPage }>
                <PaginationLink href='#'
                                onClick={ getNextPage }>{ '>' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ isLastPage }>
                <PaginationLink href='#'
                                onClick={ getLastPage }>{ '>>' }</PaginationLink>
            </PaginationItem>
        </Pagination>
    )
});
