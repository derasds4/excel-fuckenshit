import { read, IWorkBook } from 'ts-xlsx';

export function parse (source): IWorkBook {
    return read(source, {
        type: "binary"
    });
}
