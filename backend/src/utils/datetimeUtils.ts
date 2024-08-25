export function now() {
  return new Date();
}

export function getOneWeekFromNow() {
  const weekInMs = 7 * 24 * 60 * 60 * 1000;
  return new Date(now().getTime() + weekInMs);
}
