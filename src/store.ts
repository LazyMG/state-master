import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createStore } from "redux";

// interface Action{
//   type:"ADD" | "DELETE";
//   text?:string;
//   id:string;
// }

export interface TodoStore{
  id:string;
  text:string;
}

// const addToDo = (text:string) => {
//   return {type:"ADD",text,id:Date.now().toString()};
// }

// const deleteToDo = (id:string) => {
//   return {type:"DELETE",id};
// }

// const addToDo = createAction("todo/add",(text:string) => (
//   {payload: {id:Date.now().toString(), text}}
// ));
// const deleteToDo = createAction<string>("todo/delete")


function loadState(): TodoStore[] {
  try {
    const flag = localStorage.getItem("todo");
    if (!flag) return [];
    const parsed = JSON.parse(flag);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveState(state: TodoStore[]) {
  try {
    localStorage.setItem("todo", JSON.stringify(state));
  } catch(error) {
    console.log(error)
  }
}

// const reducer = (state:TodoStore[] = [], action) => {  
//   switch(action.type){
//     case addToDo.type:{
//       if(!action) return state;
//       const newState = [{text:action.text, id:action.id}, ...state]
//       return newState;
//     }
//     case "DELETE":{
//       if(!action.id) return state;
//       const newState = state.filter(item => item.id !== action.id);
//       return newState;
//     }
//     default:
//       return state
//   }
// }

// const reducer = createReducer<TodoStore[]>([], (builder) =>{
//   builder
//     .addCase(addToDo,(state,action) => {
//       const text = action.payload.text ?? "";
//       if(!text) return;
//       state.push({text, id:action.payload.id})
//     }).addCase(deleteToDo,(state,action) => state.filter(item => item.id !== action.payload))
// });

const todosSlice = createSlice({
  name:"todos",
  initialState:[] as TodoStore[],
  reducers:{
    addToDo:{
      reducer(state, action:PayloadAction<{id:string; text:string}>){
        const text = action.payload.text;
        if(!text) return state;
        state.push({text, id:action.payload.id})
      },
      prepare(text:string){
        return{
          payload:{
            id:Date.now().toString(),
            text
          }
        }
      },
    },
    deleteToDo(state, action:PayloadAction<{id:string}>){
      return state.filter(item => item.id !== action.payload.id)
    }
  }
})

export const { addToDo, deleteToDo } = todosSlice.actions;
export const actionCreators = {
  addToDo,
  deleteToDo
}
// const preloadedState = loadState();
// export const store = createStore(reducer,preloadedState);

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  },
  preloadedState: { 
    todos: loadState()
  },
});


store.subscribe(() => {
  const {todos} = store.getState()
  saveState(todos);
});

export type RootState = ReturnType<typeof store.getState>;