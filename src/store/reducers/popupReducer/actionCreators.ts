import { Open, Close } from './interfaces';
import { Actions } from './actions';

export const actionCreators = {
    open: (children: Open['children']): Open => ({ type: Actions.Open, children }),
    close: (): Close  => ({ type: Actions.Close }),
}
