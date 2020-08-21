export default function articles(state = [], action) {
  switch (action.type) {
    case 'LOAD_ALL_ARTICLES':
      return action.articles;
    default:
      return state;
  }
}
