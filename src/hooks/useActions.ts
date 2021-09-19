import { actionCreators } from '../store/reducers';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators(actionCreators, dispatch);
}
