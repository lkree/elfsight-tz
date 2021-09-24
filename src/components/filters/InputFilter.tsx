import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { ChangeEvent, FC, useCallback } from 'react';
import { getFilterState } from '../../selectors';
import { useTypedSelector } from '../../hooks';
import { Filters } from '../../common';

interface IOptions {
    onChange?: (value: string, filterType: Filters) => any;
    labelText: string;
    placeHolderText?: string;
    className?: string;
    filterType: Filters;
}

export const InputFilter: FC<IOptions> = ({ onChange, labelText, placeHolderText, className, filterType }) => {
    const { filters } = useTypedSelector(getFilterState);
    const onFilterChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => onChange?.(value, filterType), [onChange, filterType]);
    const filterValue = filters?.[filterType]?.value ?? '';

    return (
        <InputGroup className={ (className || '') + ' p-2 ' }>
            <InputGroupAddon addonType="prepend">
                <InputGroupText className={ filterValue ? 'btn-success' : '' }>{ labelText }</InputGroupText>
            </InputGroupAddon>

            <Input placeholder={ placeHolderText } value={ filterValue } onChange={ onFilterChange } />
        </InputGroup>
    )
}
