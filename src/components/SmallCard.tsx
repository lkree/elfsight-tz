import { downloadData } from '../store/reducers';
import { CHARACTER_URL, ICharacter } from '../common';
import { dispatchThunk } from '../store/thunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useActions } from '../hooks';
import { FC } from 'react';

import './SmallCard.sass';

interface IOptions {
    item?: ICharacter;
    enableNameClick?: boolean;
}

export const SmallCard: FC<IOptions> = ({ item, enableNameClick = true }: IOptions) => {
    const { open } = useActions();
    const dispatch: AppDispatch = useDispatch();

    // здесь просто сделал загрузку, потому что могу
    // а вообще, конечно, можно было использовать item, который у нас и так есть
    const onNameClick = (id: number) =>
        dispatchThunk<typeof downloadData>({
                dispatch,
                callback: downloadData,
                setIsLoading: false
            },
            {
                url: `${CHARACTER_URL}/${id}`,
                actionSetSuccess: open
            });

    return (
            <article className='RIMO__smallCard d-flex rounded'>
                <div className='RIMO__smallCard-photo-wrapper w-100'>
                    <img className='RIMO__smallCard-photo w-100 h-100'
                         src={ item?.image }
                         alt={ item?.type } />
                </div>
                <div className='RIMO__smallCard-info position-relative text-white d-flex flex-column'>
                    <section className='RIMO__smallCard-content-wrapper d-flex flex-column'>
                        <p className='RIMO__smallCard-name'
                           onClick={ () => enableNameClick ? onNameClick(item!.id) : () => void 0 }>{ item?.name }</p>
                        <span className='RIMO__smallCard-status d-flex align-items-center text-capitalize'>
                            <span className={ 'RIMO__smallCard-status-icon RIMO__smallCard-status-icon--' + item?.status }></span>
                            { item?.status }
                        </span>
                    </section>
                    <section className='RIMO__smallCard-content-wrapper d-flex flex-column'>
                        <span className='RIMO__smallCard-location-info-wrapper'>Last known location:</span>
                        <p className='RIMO__smallCard-location-info'>{ item?.location.name }</p>
                    </section>
                    <section className='RIMO__smallCard-content-wrapper d-flex flex-column'>
                        <span className='RIMO__smallCard-firstSeries-info'>First seen in:</span>
                        <p className='RIMO__smallCard-firstSeries'>{ item?.origin?.name }</p>
                    </section>
                </div>
            </article>
    );
};
