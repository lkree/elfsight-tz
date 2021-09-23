import { CHARACTER_URL } from '../../../common';
import { IDownloadData } from './interfaces';

export const downloadData = ({ url = CHARACTER_URL, resolve, reject }: IDownloadData) =>
    fetch(url)
        .then((r) => r.json())
        .then((result) => resolve(result))
        .catch(() => reject('something goes wrong'));
