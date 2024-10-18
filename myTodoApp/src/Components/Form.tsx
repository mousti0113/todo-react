function Form() {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
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