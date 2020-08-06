import {addItem, deleteItem, markItem} from '../action/actionType'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = {
  addItem,
  deleteItem,
  markItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);