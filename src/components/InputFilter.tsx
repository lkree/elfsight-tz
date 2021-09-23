import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { ChangeEvent, FC } from 'react';
import { Filters } from '../common';
import { useTypedSelector } from '../hooks';
import { getFilterState } from '../store/selectors';

interface IOptions {
    onChange?: (value: string, filterType: Filters) => any;
    labelText: string;
    placeHolderText?: string;
    className?: string;
    filterType: Filters;
}

export const InputFilter: FC<IOptions> = ({ onChange, labelText, placeHolderText, className, filterType }) => {
    const { filters } = useTypedSelector(getFilterState);
    const onFilterChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => onChange?.(value, filterType);

    return (
        <InputGroup className={ className + ' p-2' }>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>{ labelText }</InputGroupText>
            </InputGroupAddon>

            <Input placeholder={ placeHolderText } value={ filters?.[filterType]?.value ?? '' } onChange={ onFilterChange } />
        </InputGroup>
    )
}
