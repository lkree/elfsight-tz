import { DropdownItem, DropdownMenu, DropdownToggle, InputGroup, InputGroupButtonDropdown } from 'reactstrap';
import { Filters, TSelectFilter } from '../../common';
import { FC, useCallback, useState } from 'react';
import { getFilterState } from '../../selectors';
import { useTypedSelector } from '../../hooks';

interface IOptions {
    selectorText: string;
    headerText?: string;
    filterType: Filters;
    filterValues: TSelectFilter;
    onChange?: (value: string, filterType: Filters) => any;
}

export const SelectFilter: FC<IOptions> = ({ selectorText, headerText, filterValues, filterType, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { filters } = useTypedSelector(getFilterState);
    const onItemClick = useCallback((value, filterType) => onChange?.(value, filterType), [onChange]);
    const toggleDropDown = useCallback(() => setIsOpen(state => !state), [setIsOpen]);
    const selectedFilter = filters?.[filterType]?.value;

    return (
        <InputGroup className='p-2'>
            <InputGroupButtonDropdown addonType='prepend' isOpen={ isOpen } toggle={ toggleDropDown }>
                <DropdownToggle color={ selectedFilter ? 'success' : 'secondary' }
                                caret>
                    { selectedFilter || selectorText }
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={ () => onItemClick('', filterType) }>сбросить</DropdownItem>
                    <DropdownItem divider />
                    {
                        headerText &&
                        <>
                           <DropdownItem header>{ headerText }</DropdownItem>
                           <DropdownItem divider />
                        </>
                    }

                    {
                        filterValues.options.map((value) => (
                            <DropdownItem key={ value }
                                          active={ value === selectedFilter }
                                          onClick={ () => onItemClick(value, filterType) }>
                                { value }
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </InputGroupButtonDropdown>
        </InputGroup>
    )
}
