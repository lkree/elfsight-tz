import { FC } from 'react';
import { useTypedSelector } from '../hooks';

export const ErrorContainer: FC = ({ children }) => {
    const { dataReducer: { processInfo: { error } } } = useTypedSelector(state => state);
    if (error) return <div className='text-white'>{ error }</div>

    return <>{ children }</>;
}
