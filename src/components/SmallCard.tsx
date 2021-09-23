import { CHARACTER_URL, ICharacter } from '../common';
import { useActions } from '../hooks';
import { FC, useCallback } from 'react';

import './SmallCard.sass';

interface IOptions {
    item?: ICharacter;
    enableNameClick?: boolean;
}

export const SmallCard: FC<IOptions> = ({ item, enableNameClick = true }: IOptions) => {
    const { open, getData } = useActions();

    // здесь просто сделал загрузку, потому что могу
    // а вообще, конечно, можно было использовать item, который у нас и так есть
    const onNameClick = useCallback((id: number) => {
        getData({ url: `${CHARACTER_URL}/${id}`, resolve: open });
    }, [getData, open]);

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
