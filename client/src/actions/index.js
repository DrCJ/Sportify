export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export function changeSearchText(string) {
  return {
    type: CHANGE_SEARCH_TEXT,
    string,
  };
}
