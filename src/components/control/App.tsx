import { PaginationWrapper } from './PaginationWrapper';
import { PopupContainer } from './PopupContainer';
import { Header, CardWrapper } from '../view';
import { ErrorContainer } from './Error';
import { FilterPanel } from '../filters';
import { useActions } from '../../hooks';
import { Container } from 'reactstrap';
import { FC, useEffect } from 'react';

import './App.sass';


export const App: FC = () => {
    const { getData, setIsLoading } = useActions();
    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [getData, setIsLoading]);

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
