import { parse, parseDelay, parseDelaySafe, parsePromise } from './error';

describe('Callback errors', () => {
  test('Error sync', () => {
    const data = 'saoudfhsi';

    try {
      parse(data);
      fail();
    } catch (error) {}
  });

  test('Error async', (done) => {
    const data = 'saoudfhsi';

    parseDelay(data, (err, result) => {
      if (err) return done();
      fail();
    });
  });

  test('Error async safe', (done) => {
    const data = 'saoudfhsi';

    parseDelaySafe(data, (err, result) => {
      if (err) return done();
      fail();
    });
  });

  test('Promise error', async () => {
    try {
      await parsePromise('haspiofghser');
      fail();
    } catch (error) {}
  });
});
