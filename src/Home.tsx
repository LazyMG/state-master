import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { actionCreators, TodoStore } from "./store";

const Home = () => {
  const [text, setText] = useState("");
  const todos = useSelector<TodoStore[],TodoStore[]>((state) => state);
  const dispatch = useDispatch();

  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const onSubmit = (event:FormEvent) => {
    event.preventDefault();
    dispatch(actionCreators.addToDo(text))
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={text} type="text" placeholder="Write todo"/>
        <button>ADD</button>
      </form>
      <ul>{todos.map(todo => (
        <Todo key={todo.id} {...todo}/>
      ))}</ul>
    </>
  )
}

// function mapStateToProps(state:Store[]){
//   return {toDos:state}
// }

// function mapDispatchToProps(dispatch){
//   return {
//     addTodo:(text:string) => dispatch(actionCreators.addToDo(text)),
//     deleteTodo:(id:string) => dispatch(actionCreators.deleteToDo(id))
//   };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;