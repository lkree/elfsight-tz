import { IDownloadData } from './interfaces';

export const downloadData = ({ url, resolve, reject }: IDownloadData) =>
    fetch(url)
        .then((r) => r.json())
        .then((result) => resolve(result))
        .catch(() => reject('something goes wrong'));
