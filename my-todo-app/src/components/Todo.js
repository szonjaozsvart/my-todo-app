function Todo({ index, todo, deleteTodo }) {
  return (
    <div className="allTodos">
      {todo.text}
      <div>
        <button onClick={() => deleteTodo(index)} className="bye-btn">
          Next
        </button>
      </div>
    </div>
  );
}

export default Todo;
