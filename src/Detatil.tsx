import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import { TodoStore } from "./store";

const Detatil = ({toDos}:{toDos:TodoStore[]}) => {
  const {id} = useParams();
  const toDo = toDos.find(item => item.id === id);

  return (
    <>
      <h1>Detatil</h1>
      <div>
        <span>{toDo?.text}</span>
      </div>
    </>
  )
}

function mapStateToProps(state:TodoStore[]){
  return {
    toDos:state
  }
}

export default connect(mapStateToProps)(Detatil)