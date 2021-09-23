import { Open, Close } from './interfaces';
import { Actions } from './actions';

export const actionCreators = {
    open: (data: Open['data']): Open => ({ type: Actions.Open, data }),
    close: (): Close  => ({ type: Actions.Close }),
}
