export function waitRandomMs(min: number, max: number) {
  const ms = min + Math.random() * (max - min);
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
}
