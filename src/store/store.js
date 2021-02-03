import { createStore } from 'redux';
import rootReducer from './reducer';

// let preloadedState
// const persistedTodosString = localStorage.getItem('validation')

// if (persistedTodosString) {
//     preloadedState = {
//         todos: JSON.parse(persistedTodosString)
//     }
// }

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());