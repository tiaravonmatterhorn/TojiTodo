import ToDoItem from "../components/ToDoItem";
import NewToDo from "../components/NewToDo";
import { useEffect, useState } from "react";
import { useToDos } from "../hooks/useToDos";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Confetti from "react-confetti";

export default function HomePage() {
    const [uiProps, setUiProps] = useState({
        showNewToDo: false,
        showNewToDoButton: true,
        showConfetti: false,
        confettiWidth: 0,
        confettiHeight: 0,
    });

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const { data: todos, status: toDosStatus, error: toDosError } = useToDos();

    const handleAddToDoClick = () => {
        setUiProps((prevUiProps) => ({
            ...prevUiProps,
            showNewToDo: !prevUiProps.showNewToDo,
            showNewToDoButton: !prevUiProps.showNewToDoButton,
        }));
    };

    const triggerConfetti = () => {
        setUiProps((prevUiProps) => ({
            ...prevUiProps,
            showConfetti: true,
            confettiHeight: windowHeight,
            confettiWidth: windowWidth,
        }));
    };

    // stopping confetti after being triggered
    useEffect(() => {
        let timer;

        if (uiProps.showConfetti) {
            timer = setTimeout(() => {
                setUiProps((prevUiProps) => ({
                    ...prevUiProps,
                    showConfetti: false,
                }));
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [uiProps.showConfetti]);

    // Filter for only the todos that are not completed
    const activeToDos = todos.filter((todo) => !todo.completed);

    return (
        <section className="flex flex-col gap-3 bg-neutral-100 text-white px-4 py-8 rounded-md min-h-screen">
            {uiProps.showConfetti && (
                <Confetti width={windowWidth} height={windowHeight} />
            )}

            {uiProps.showNewToDo && (
                <NewToDo handleAddToDoClick={handleAddToDoClick} />
            )}

            <div className="flex flex-col gap-4 justify-center">
                {toDosStatus === "loading" && (
                    <AiOutlineLoading3Quarters className="text-indigo-900 text-2xl animate-spin text-center" />
                )}
                {toDosStatus === "failed" && (
                    <p className="text-red-500">Error: {toDosError}</p>
                )}
                {toDosStatus === "succeeded" && activeToDos.length > 0
                    ? activeToDos.map((todo) => (
                          <ToDoItem
                              key={todo.id}
                              todo={todo}
                              triggerConfetti={triggerConfetti}
                          />
                      ))
                    : toDosStatus === "succeeded" && (
                          <p className="text-center text-gray-500">
                              No active todos. Add a new one!
                          </p>
                      )}
            </div>

            {uiProps.showNewToDoButton && (
                <button
                    className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-md z-20 shadow-md shadow-amber-500/50"
                    onClick={handleAddToDoClick}
                >
                    Add ToDo
                </button>
            )}
        </section>
    );
}
