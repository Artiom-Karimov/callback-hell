import { readFile } from 'node:fs';

export function read(
  path: string,
  callback: (err?: Error, result?: string) => void,
): void {
  return readFile(path, (err, result) => {
    if (err) return callback(err);
    callback(null, result.toString());
  });
}

export class ZalgoReader {
  private readonly cache: { [path: string]: string } = {};

  public read(
    path: string,
    callback: (err?: Error, result?: string) => void,
  ): void {
    const cached = this.cache[path];
    if (cached) return callback(null, cached);

    readFile(path, (err, data) => {
      if (err) return callback(err);
      const result = data.toString();
      this.cache[path] = result;
      return callback(null, result);
    });
  }
}
