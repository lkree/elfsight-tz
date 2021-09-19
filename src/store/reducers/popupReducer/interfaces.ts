import { Actions } from './actions';
import { ReactElement } from 'react';

type IStatus = 'opened' | 'closed';

export interface Open {
    type: Actions.Open;
    children: ReactElement;
}

export interface Close {
    type: Actions.Close;
}


export interface IState {
    status: IStatus;
    children: ReactElement;
}

export type TActions = Open | Close;
