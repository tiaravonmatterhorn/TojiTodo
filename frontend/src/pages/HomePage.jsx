import React from "react";
import ToDoItem from "../components/ToDoItem";
import NewToDo from "../components/NewToDo";
import { useState } from "react";

export default function HomePage() {
    const [showNewToDo, setShowNewToDo] = useState(false);
    const [showNewToDoButton, setShowNewToDoButton] = useState(true);

    const handleAddToDoClick = () => {
        setShowNewToDo(!showNewToDo);
        setShowNewToDoButton(!showNewToDoButton);
    };

    return (
        <section className="flex flex-col gap-3 bg-neutral-100 text-white px-4 py-8 rounded-md min-h-screen">
            {/* <div className="flex flex-col bg-indigo-900  text-white px-4 py-2 rounded-md justify-center h-[80vh] shadow-xl shadow-indigo-500/50"> */}
            {/* <h1 className="text-3xl font-light text-center">Home</h1> */}

            {showNewToDoButton && (
                <button
                    className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-md z-20"
                    onClick={handleAddToDoClick}
                >
                    Add ToDo
                </button>
            )}
            <div className="mb-24">
                <ToDoItem />
            </div>
            {showNewToDo && <NewToDo handleAddToDoClick={handleAddToDoClick} />}
            {/* </div> */}
        </section>
    );
}
