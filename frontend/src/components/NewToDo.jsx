import { useState } from "react";
import SegmentedControl from "./SegmentedControl";
import { MdOutlineCancel } from "react-icons/md";
import { useToDos } from "../hooks/useToDos";

const NewToDo = ({ handleAddToDoClick }) => {
    const priorityChoices = [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
    ];

    const { addToDo } = useToDos();

    const [newToDo, setNewToDo] = useState({
        title: "",
        priority: "low",
    });

    const handleChange = (e) => {
        setNewToDo({
            ...newToDo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(newToDo);
    };

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
                name="title"
                onChange={handleChange}
            />
            <label htmlFor="priority" className="font-light text-left px-1">
                Priority
            </label>
            <SegmentedControl
                options={priorityChoices}
                onChange={(value) =>
                    setNewToDo({ ...newToDo, priority: value })
                }
            />

            <button
                className="bg-amber-500 text-white px-4 py-2 mt-6 rounded-md w-[50%] mx-auto"
                onClick={(e) => {
                    handleSubmit(e);
                    handleAddToDoClick();
                }}
            >
                Let's do this!
            </button>
        </div>
    );
};

export default NewToDo;
