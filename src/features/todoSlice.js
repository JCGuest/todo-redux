// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  counter: 0
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     saveTodo: (state, action) => {
//       state.todoList.push(action.payload);
//     },
//     increment: (state) => {
//       state.counter = 1;
//     }
//   }
// });

// export const { saveTodo, increment } = todoSlice.actions;
// export default todoSlice.reducer;
export default todoReducer;
