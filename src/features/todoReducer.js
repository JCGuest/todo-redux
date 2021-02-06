// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: state.todoList.concat({
          item: action.item,
          done: action.done,
          id: action.id
        })
      };
    case 'CHECK':
      return {
        ...state,
        todoLIst: state.todoList.map((item, i) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        )
      };

    // ...state,
    //  contents: state.contents.map(
    //      (content, i) => i === 1 ? {...content, text: action.payload}
    //                              : content
    //  )

    // case 'UNCHECK':
    //   const id = action.id;
    //   return {
    //     ...state,
    //     todoList: state.todoList.map((item) => {
    //       if (item.id === id) {
    //         item.done = false;
    //       }
    //     })
    //   };
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
export const selectTodoList = (state) => state.todos.todoList;

export default todoReducer;
