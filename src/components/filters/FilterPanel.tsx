import { FILTER_TYPES, Filters, getUrlWithFilters, TInputFilter, TSelectFilter } from '../../common';
import { FC, memo, MouseEventHandler, useCallback, useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useActions, useTypedSelector } from '../../hooks';
import { getFilterState } from '../../selectors';
import { SelectFilter } from './SelectFilter';
import { InputFilter } from './InputFilter';

import './FilterPanel.sass';

const ICON_SIZE = 24;

export const FilterPanel: FC = () => {
    const { resetFilters, setFiltered, setChanges, getData, setIsLoading } = useActions();
    const { filters, isFiltered, hasChanges } = useTypedSelector(getFilterState);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const onResetClick = () => {
        setIsLoading(true);
        resetFilters();
        getData();
    };
    const onAcceptClick = () => {
        setIsLoading(true);
        setFiltered(true);
        setIsPanelOpen(false);
        getData({ url: getUrlWithFilters(filters) });
    };
    const onPanelIconClick = useCallback(() => setIsPanelOpen((state) => !state), [setIsPanelOpen]);

    return (
        <div className='RIMO__filterPanel'>
            <PanelIcon isIconFilled={ isFiltered } onClick={ onPanelIconClick } />

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
                           ???? ??????????????????
                        </Button>
                   }
               </ModalHeader>
               <ModalBody><FiltersComponent setChanges={ setChanges } /></ModalBody>
            </Modal>
        </div>
    )
}

interface IFiltersProps {
    setChanges: (props: { filterType: Filters, payload: string }) => unknown;
}

const FiltersComponent: FC<IFiltersProps> = memo(({ setChanges }) =>
    <>
        { Object.entries(FILTER_TYPES).map(([filterName, filterValue]) => (
            filterValue.type === 'input'
                ?                   <InputFilter labelText={ filterName }
                                                 key={ filterName }
                                                 placeHolderText={ (filterValue as TInputFilter).placeHolderText }
                                                 filterType={ filterName as Filters }
                                                 onChange={ (value, filterType) => setChanges({ filterType, payload: value }) } />
                :                    <SelectFilter selectorText={ filterName }
                                                   key={ filterName }
                                                   filterValues={ filterValue as TSelectFilter }
                                                   filterType={ filterName as Filters }
                                                   onChange={ (value, filterType) => setChanges({ filterType, payload: value }) } />
        ))
        }
    </>
);

interface IPanelIconOptions {
    isIconFilled: boolean;
    onClick: MouseEventHandler<SVGSVGElement>;
}

const PanelIcon: FC<IPanelIconOptions> = memo(({ isIconFilled, ...rest }) => (
    <svg stroke="currentColor"
         fill="#fff"
         strokeWidth="0"
         viewBox="0 0 16 16"
         height={ICON_SIZE + 'px'}
         width={ICON_SIZE + 'px'}
         xmlns="http://www.w3.org/2000/svg"
         { ...rest }>
        { isIconFilled && <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"></path> }
        <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clipRule="evenodd"></path>
    </svg>
));
