import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getNextPage, TPageType } from '../store/reducers';
import { getDataState } from '../store/selectors';
import { getCurrentPageNumber } from '../common';
import { dispatchThunk } from '../store/thunk';
import { useTypedSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { FC } from 'react';

export const PaginationWrapper: FC = () => {
    const { processInfo, meta } = useTypedSelector(getDataState);
    const dispatch: AppDispatch = useDispatch();

    if (processInfo.isLoading || meta?.pages < 2) {
        return <></>;
    }

    const getPage = (pageType: TPageType) => dispatchThunk<typeof getNextPage>({ dispatch, callback: getNextPage }, pageType, meta);
    const currentPage = getCurrentPageNumber(meta);

    return (
        <Pagination className='pt-2'>
            <PaginationItem disabled={ currentPage === 1 }>
                <PaginationLink href='#'
                                onClick={ () => getPage('first') }>{ '<<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ currentPage === 1 }>
                <PaginationLink href='#'
                                onClick={ () => getPage('prev') }>{ '<' }</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink>{ currentPage }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ currentPage === meta.pages }>
                <PaginationLink href='#'
                                onClick={ () => getPage('next') }>{ '>' }</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={ currentPage === meta.pages }>
                <PaginationLink href='#'
                                onClick={ () => getPage('last') }>{ '>>' }</PaginationLink>
            </PaginationItem>
        </Pagination>
    )
};
