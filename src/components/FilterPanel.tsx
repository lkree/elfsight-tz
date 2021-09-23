import { FILTER_TYPES, Filters, getUrlWithFilters, TInputFilter, TSelectFilter } from '../common';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../hooks';
import { downloadData } from '../store/reducers';
import { dispatchThunk } from '../store/thunk';
import { InputFilter } from './InputFilter';
import { useDispatch } from 'react-redux';
import { FC, useState } from 'react';

import './FilterPanel.sass';
import { SelectFilter } from './SelectFilter';
import { getFilterState } from '../store/selectors';

const ICON_SIZE = 24;

export const FilterPanel: FC = () => {
    const dispatch = useDispatch();
    const { resetFilters, setFiltered, setChanges } = useActions();
    const { filters, isFiltered, hasChanges } = useTypedSelector(getFilterState);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const onResetClick = () => {
        resetFilters();
        dispatchThunk<typeof downloadData>({ dispatch, callback: downloadData });
    };
    const onAcceptClick = () => {
        setFiltered(true);
        setIsPanelOpen(false);
        dispatchThunk<typeof downloadData>(
            { dispatch, callback: downloadData },
            { url: getUrlWithFilters(filters) }
        );
    };
    const onPanelIconClick = () => setIsPanelOpen((state) => !state);
    const renderFilters = () => (Object.keys(FILTER_TYPES) as Filters[]).map((filterName) => (
        FILTER_TYPES[filterName].type === 'input'
            ?                   <InputFilter labelText={ filterName }
                                             key={ filterName }
                                             placeHolderText={ (FILTER_TYPES[filterName] as TInputFilter).placeHolderText }
                                             filterName={ filterName }
                                             onChange={ (value, filterType) => setChanges({ filterType, payload: value }) } />
            :                    <SelectFilter selectorText={ filterName }
                                               key={ filterName }
                                               filterValues={ FILTER_TYPES[filterName] as TSelectFilter }
                                               filterType={ filterName }
                                               onChange={ (value, filterType) => setChanges({ filterType, payload: value }) } />
    ));

    return (
        <div className='RIMO__filterPanel'>
            {
                isFiltered
                    ? <FilledIcon onClick={ onPanelIconClick } />
                    : <EmptyIcon onClick={ onPanelIconClick } />
            }

            <Modal isOpen={ isPanelOpen } toggle={ onPanelIconClick }>
               <ModalHeader toggle={ onPanelIconClick } className='position-relative'>
                   Filter Panel
                   { hasChanges &&
                        <Button className='RIMO__filterPanel-icon'
                                color='success'
                                onClick={ onAcceptClick }>
                           Accept
                        </Button>
                   }
                   { isFiltered &&
                        <Button className='RIMO__filterPanel-resetButton'
                                color='link'
                                size='sm'
                                onClick={ onResetClick }>
                           По умолчанию
                        </Button>
                   }
               </ModalHeader>
               <ModalBody>
                   { renderFilters() }
               </ModalBody>
            </Modal>
        </div>
    )
}

const FilledIcon = ({ ...props }) => (
    <svg stroke="currentColor"
         fill="#fff"
         strokeWidth="0"
         viewBox="0 0 16 16"
         height={ICON_SIZE + 'px'}
         width={ICON_SIZE + 'px'}
         xmlns="http://www.w3.org/2000/svg"
         { ...props }>
        <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"></path>
        <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clipRule="evenodd"></path>
    </svg>
);

const EmptyIcon = ({ ...props }) => (
    <svg stroke="currentColor"
         fill="#fff"
         strokeWidth="0"
         viewBox="0 0 16 16"
         height={ICON_SIZE + 'px'}
         width={ICON_SIZE + 'px'}
         xmlns="http://www.w3.org/2000/svg"
         { ...props }>
        <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clipRule="evenodd"></path>
    </svg>
)
