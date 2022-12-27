export const uuid = (() => {
  let i = 0;
  return () => `${i++}`;
})();
