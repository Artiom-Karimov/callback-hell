import { resolve } from 'node:path';
import { ZalgoReader, read } from './zalgo';

describe('File read operations', () => {
  const path1 = resolve(__dirname, 'zalgo1.txt');
  const path2 = resolve(__dirname, 'zalgo2.txt');
  const zalgo = new ZalgoReader();

  test('Read file', (done) => {
    read(path1, (err, result) => {
      if (err) return done(err);
      expect(result).toBe('Hello from file!');
      done();
    });
  });

  test('Read file', (done) => {
    zalgo.read(path1, (err, result) => {
      if (err) return done(err);
      expect(result).toBe('Hello from file!');
      done();
    });
  });

  test('Read 2 files', (done) => {
    const files = [path1, path2];

    let results = new Array<string>();

    files.forEach((file) => {
      zalgo.read(file, (err, result) => {
        if (err) return done(err);
        results.push(result);
      });
    });
    results = [];

    setTimeout(() => {
      expect(results.length).toBe(2);
      done();
    }, 30);
  });
});
