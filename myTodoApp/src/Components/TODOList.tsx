function TODOList({ todos}:TODOListProps) {
    return <ol className="todo_list">
        {todos && todos.length > 0 ? (
        todos?.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}</ol>;
  }
  export default TODOList;
  function Item({item}:ItemProps) {
    return (
      <li id={item?.id} className="todo_item">
        <button className="todo_items_left">
         
          <p>{item?.title}</p>
        </button>
        <div className="todo_items_right">
          <button>
            <span className="visually-hidden">Edit</span>
            
          </button>
          <button>
            <span className="visually-hidden">Delete</span>
           
          </button>
        </div>
      </li>
    );
   
  }
  type ItemProps = {
    item: { id: string; title: string; is_completed: boolean };
  };
  type TODOListProps = {
    todos: { id: string; title: string; is_completed: boolean}[];
  };