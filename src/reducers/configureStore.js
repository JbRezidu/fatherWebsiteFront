import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos.reducer';
import articles from './articles.reducer';

export default function initStore() {
  const globalAppReducer = combineReducers({
    todos,
    articles,
  });
  const middlewares = [];
  return createStore(
    globalAppReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
