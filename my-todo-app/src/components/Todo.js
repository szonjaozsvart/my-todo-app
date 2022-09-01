function Todo({ index, todo, deleteTodo }) {
  return (
    <div className="allTodos">
      {todo.text}
      <button onClick={() => deleteTodo(index)} className="bye-btn">
        Done
      </button>
    </div>
  );
}

export default Todo;
