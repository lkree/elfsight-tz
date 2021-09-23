import { PaginationWrapper } from './PaginationWrapper';
import { PopupContainer } from './PopupContainer';
import { FilterPanel } from './FilterPanel';
import { CardWrapper } from './CardWrapper';
import { ErrorContainer } from './Error';
import { Container } from 'reactstrap';
import { FC, useEffect } from 'react';
import { useActions } from '../hooks';
import { Header } from './Header';

import './App.sass';


export const App: FC = () => {
    const { getData } = useActions();
    useEffect(() => { getData(); }, [getData]);

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
