import { getError } from '../selectors';
import { useTypedSelector } from '../hooks';
import { FC } from 'react';

export const ErrorContainer: FC = ({ children }) => {
    const error = useTypedSelector(getError);

    return error
            ? <div className='text-white'>{ error }</div>
            : <>{ children }</>;
}
