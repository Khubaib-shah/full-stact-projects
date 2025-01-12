import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = ({ text, updateTodo, deleteTodo }) => {
  return (
    <div className="relative mt-4 bg-black text-white py-6 px-12 border rounded-md">
      <div>{text}</div>
      <div className="absolute top-1/2 right-5 flex gap-2 -translate-y-1/2">
        <FaEdit className="cursor-pointer text-xl" onClick={updateTodo} />
        <MdDelete className="cursor-pointer text-xl" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
