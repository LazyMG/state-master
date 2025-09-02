import { useDispatch } from "react-redux"
import { actionCreators, TodoStore } from "./store"
import { Link } from "react-router-dom";


const Todo = ({text,id,isFinished}:TodoStore) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDo({id}))
  }
  const change = () => {
    dispatch(actionCreators.changeTodo({id}))
  }
  return (
    <li>
      <button onClick={change}>{isFinished ? "TODO" : "DONE"}</button>
      <Link to={`/${id}`}>{text}</Link> 
      <button onClick={onClick}>❌</button>
    </li>
  )
}

// function mapDispatchToProps(dispatch,ownProps:Store){
//   return {
//     deleteTodo:() => dispatch(actionCreators.deleteToDo(ownProps.id)),
//     ownProps
//   }
// }

// export default connect(null,mapDispatchToProps)(Todo)

export default Todo;