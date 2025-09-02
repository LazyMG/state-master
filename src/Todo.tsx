import { useDispatch } from "react-redux"
import { actionCreators, TodoStore } from "./store"
import { Link } from "react-router-dom";


const Todo = ({text,id}:TodoStore) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDo({id}))
  }
  return (
    <li>
      <Link to={`/${id}`}>
      {text}</Link> <button onClick={onClick}>DEL</button>
      
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