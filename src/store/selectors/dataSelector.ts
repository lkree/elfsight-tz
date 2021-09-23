import { RootState } from '../index';

export const getDataState = ({ dataReducer: { characterData, renderData, meta, processInfo } }: RootState) => ({
    characterData,
    renderData,
    processInfo,
    meta
})

export const getError = ({ dataReducer: { processInfo: { error } } }: RootState) => error;
