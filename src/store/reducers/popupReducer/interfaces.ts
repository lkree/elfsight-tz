import { ICharacter } from '../../../common';
import { Actions } from './actions';

export interface Open {
    type: Actions.Open;
    data: ICharacter;
}

export interface Close {
    type: Actions.Close;
}

export interface IState {
    data?: ICharacter;
}

export type TActions = Open | Close;
