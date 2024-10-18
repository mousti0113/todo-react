

function Form({ setTodos }: FormProps) {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputElement = event.currentTarget.elements.namedItem('todo') as HTMLInputElement;
    const newTodoTitle = inputElement.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: value,
        title: newTodoTitle,
        completed: false,
      },
    ]);
      // reset the form
      event.currentTarget.reset();
      
      
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo" 
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          
        </button>
      </form>
    );
  }
  export default Form;
  type FormProps = {
    setTodos: React.Dispatch<React.SetStateAction<{ id: string; title: string; completed: boolean }[]>>;
  };