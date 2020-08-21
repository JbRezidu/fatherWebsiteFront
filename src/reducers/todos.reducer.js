import { v4 } from 'uuid';


export default function todos(state = [{name: 'Code bien', id: v4()}], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {name: action.name, id: v4()}];
    default:
      return state;
  }
}
