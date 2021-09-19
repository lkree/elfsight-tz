import { ParamsWithOutDispatch, SomeFunction } from '../../common';
import { actionCreators } from '../reducers';
import { AppDispatch } from '../index';

interface IDispatchProps {
    dispatch: AppDispatch;
    callback: SomeFunction;
    setIsLoading?: boolean;
}

export const dispatchThunk = <T extends SomeFunction = SomeFunction>(
    { dispatch, setIsLoading = true, callback }: IDispatchProps,
    ...args: ParamsWithOutDispatch<T>
) => {
    if (setIsLoading) {
        dispatch(actionCreators.setIsLoading(true));
    }

    dispatch((dispatchCallback: Function) => callback(dispatchCallback, ...args));
}

