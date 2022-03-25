import { getDataState } from '../../selectors';
import { useTypedSelector } from '../../hooks';
import { SmallCard } from './SmallCard';
import { Spinner } from 'reactstrap';
import { FC, memo } from 'react';

const Cards = memo(() => {
    const { renderData } = useTypedSelector(getDataState);

    return (
        <>
            { renderData.map((item) => <SmallCard key={ item.id } item={ item } />) }
        </>
    )
});

export const CardWrapper: FC = () => {
    const { processInfo } = useTypedSelector(getDataState);

    if (processInfo.isLoading) {
        return <Spinner color='primary' style={{ width: '5vw', height: '5vw' }}> </Spinner>
    }

    return (
        <main className='bg-white h-100 w-100 rounded p-2 d-flex flex-wrap justify-content-between'>
            <Cards />
        </main>
    )
};
