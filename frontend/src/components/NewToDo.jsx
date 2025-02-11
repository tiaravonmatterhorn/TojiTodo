import SegmentedControl from "./SegmentedControl";
import { MdOutlineCancel } from "react-icons/md";

const NewToDo = ({ handleAddToDoClick }) => {
    const priorityChoices = ["Low", "Medium", "High"];

    return (
        <div className="flex flex-col gap-2 bg-indigo-900  text-white px-4 py-8 rounded-md align-center shadow-xl shadow-indigo-500/50 relative">
            <MdOutlineCancel
                className="absolute top-4 right-4 text-2xl"
                onClick={() => handleAddToDoClick()}
            />
            <label htmlFor="title" className="font-light text-left px-1">
                Your new ToDo
            </label>
            <input
                className="w-full px-2 py-1 my-2 rounded-md bg-indigo-500 h-12"
                type="text"
                placeholder="Add your ToDo here..."
            />
            <label htmlFor="priority" className="font-light text-left px-1">
                Priority
            </label>
            <SegmentedControl
                options={priorityChoices}
                onChange={(value) => console.log("Selected:", value)}
            />

            <button className="bg-amber-500 text-white px-4 py-2 mt-6 rounded-md w-[50%] mx-auto">
                Let's do this!
            </button>
        </div>
    );
};

export default NewToDo;
