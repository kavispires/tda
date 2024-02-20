/**
 * Get local storage key prefixed with TDA
 * @param key
 * @returns
 */
export const getLocalStorageKey = (key: string) => {
  return `TDA_${key}`;
};
