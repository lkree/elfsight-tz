import { PaginationWrapper } from './PaginationWrapper';
import { PopupContainer } from './PopupContainer';
import { downloadData } from '../store/reducers';
import { dispatchThunk } from '../store/thunk';
import { FilterPanel } from './FilterPanel';
import { CardWrapper } from './CardWrapper';
import { useDispatch } from 'react-redux';
import { ErrorContainer } from './Error';
import { Container } from 'reactstrap';
import { FC, useEffect } from 'react';
import { Header } from './Header';

import './App.sass';

export const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatchThunk({ dispatch, callback: downloadData }));

    return (
        <>
            <Header />
            <Container fluid className="bg-dark RIMO p-5 d-flex flex-column justify-content-center align-items-center
                                        position-relative">
                <FilterPanel />
                <ErrorContainer>
                        <CardWrapper />
                        <PaginationWrapper />
                </ErrorContainer>
            </Container>

            <PopupContainer />
        </>
    )
};
