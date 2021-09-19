import { SetData, SetError, SetIsLoading } from './interfaces';
import { Actions } from './actions';

export const actionCreators = {
    setIsLoading: (payload: SetIsLoading['payload']): SetIsLoading => ({ type: Actions.SetIsLoading, payload }),
    setData: (payload: SetData['payload']): SetData  => ({ type: Actions.SetData, payload }),
    setError: (error: SetError['payload']): SetError => ({ type: Actions.SetError, payload: error })
}
