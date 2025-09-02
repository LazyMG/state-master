import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RootState, TodoStore } from "./store";

const Detatil = () => {
  const todos = useSelector<RootState,TodoStore[]>(state => state.todos)
  const {id} = useParams();
  const toDo = todos.find(item => item.id === id);

  return (
    <>
      <h1>Detatil</h1>
      <div>
        <span>{toDo?.text}</span>
      </div>
    </>
  )
}

// function mapStateToProps(state:TodoStore[]){
//   return {
//     toDos:state
//   }
// }

// export default connect(mapStateToProps)(Detatil)

export default Detatil