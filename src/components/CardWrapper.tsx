import { FC } from 'react';
import { SmallCard } from './SmallCard';
import { useTypedSelector } from '../hooks';
import { Spinner } from 'reactstrap';

export const CardWrapper: FC = () => {
    const { dataReducer } = useTypedSelector(state => state);
    const generateCards = () => dataReducer.renderData.map((item) => <SmallCard key={ item.id } item={ item } />);

    if (dataReducer.processInfo.isLoading) {
        return <Spinner color='primary' style={{ width: '5vw', height: '5vw' }}> </Spinner>
    }

    return (
        <main className='bg-white h-100 w-100 rounded p-2 d-flex flex-wrap justify-content-between'>
            { generateCards() }
        </main>
    )
};
