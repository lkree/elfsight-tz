import { DropdownItem, DropdownMenu, DropdownToggle, InputGroup, InputGroupButtonDropdown } from 'reactstrap';
import { Filters, TSelectFilter } from '../common';
import { useTypedSelector } from '../hooks';
import { FC, useState } from 'react';

interface IOptions {
    selectorText: string;
    headerText?: string;
    filterType: Filters;
    filterValues: TSelectFilter;
    onChange?: (value: string, filterType: Filters) => any;
}

export const SelectFilter: FC<IOptions> = ({ selectorText, headerText, filterValues, filterType, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { filterReducer: { filters } } = useTypedSelector(state => state);
    const toggleDropDown = () => setIsOpen(!isOpen);
    const renderItems = () => filterValues.options.map((value) => (
        <DropdownItem key={ value }
                      disabled={ value === filters?.[filterType]?.value }
                      onClick={ () => onChange?.(value, filterType) }>
            { value }
        </DropdownItem>
    ));

    return (
        <InputGroup className='p-2'>
            <InputGroupButtonDropdown addonType='prepend' isOpen={ isOpen } toggle={ toggleDropDown }>
                <DropdownToggle caret>{ selectorText }</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={ () => onChange?.('', filterType) }>сбросить</DropdownItem>
                    <DropdownItem divider />
                    {
                        headerText &&
                        <>
                           <DropdownItem header>{ headerText }</DropdownItem>
                           <DropdownItem divider />
                        </>
                    }

                    { renderItems() }
                </DropdownMenu>
            </InputGroupButtonDropdown>
        </InputGroup>
    )
}
