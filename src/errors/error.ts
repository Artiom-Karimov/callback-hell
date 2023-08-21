const delay = 20;

export function parseDelay(
  json: string,
  callback: (err: Error, result: any) => void,
): void {
  setTimeout(() => callback(null, JSON.parse(json)), delay);
}

export function parseDelaySafe(
  json: string,
  callback: (err: Error, result?: any) => void,
): void {
  try {
    setTimeout(() => callback(null, JSON.parse(json)), delay);
  } catch (error) {
    callback(error);
  }
}

export function parseDelaySafeForSure(
  json: string,
  callback: (err: Error, result?: any) => void,
): void {
  setTimeout(() => {
    try {
      const result = JSON.parse(json);
      callback(null, result);
    } catch (error) {
      callback(error);
    }
  }, delay);
}

export async function parsePromise(json: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = JSON.parse(json);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

export function parse(json: string): any {
  return JSON.parse(json);
}
