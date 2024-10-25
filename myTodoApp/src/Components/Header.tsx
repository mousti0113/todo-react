import { ListTodo } from 'lucide-react';
function Header(){
return(
  <header className="flex items-center justify-center bg-blue-100 h-20">
      <div className="flex items-center justify-center bg-blue-300 rounded-full p-4 gap-2" >
        ToDoList
        <ListTodo className="text-blue-700 h-10 w-10" />
      </div>
    </header>
);

}
export default Header