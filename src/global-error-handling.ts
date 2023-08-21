export function handleAllErrors() {
  process.on('uncaughtException', (err) => {
    console.error(err);
  });
  process.on('unhandledRejection', (err) => {
    console.error(err);
  });
}
