import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { useToDoById } from "../hooks/useToDoById";
import { PiEyesFill } from "react-icons/pi";
import Confetti from "react-confetti";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const ToDoItem = ({ todo, triggerConfetti }) => {
    const { updateToDoById, deleteToDoById } = useToDoById(todo.id);

    const [isCompleted, setIsCompleted] = useState(todo.completed);

    // const [confetti, setConfetti] = useState(false);

    // const windowWidth = window.innerWidth;
    // const windowHeight = window.innerHeight;

    // useEffect(() => {
    //     let timer;

    //     if (confetti) {
    //         timer = setTimeout(() => {
    //             setConfetti(false);
    //         }, 5000);
    //     }
    //     return () => clearTimeout(timer);
    // }, [confetti]);

    const handleUpdateCompleted = () => {
        const nextState = !isCompleted;
        setIsCompleted(nextState);
        updateToDoById({ ...todo, completed: nextState });
        triggerConfetti();
    };

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => deleteToDoById(todo.id)}>
                <div className="flex items-center justify-center h-full">
                    <ImBin className="text-2xl text-red-500" />
                </div>
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => {
                    handleUpdateCompleted();
                }}
            >
                <div className="flex items-center justify-center h-full">
                    <IoIosCheckmarkCircleOutline className="text-4xl text-lime-500" />
                </div>
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <div className="flex flex-col gap-2 bg-indigo-900 text-white px-4 py-2 rounded-md shadow-md shadow-indigo-500/50 mb-4 relative w-full">
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <div className="flex flex-col gap-1 py-2 rounded-md w-full">
                        <h3 className="text-xl font-light text-center">
                            {todo.title}
                        </h3>
                        <p className="font-extralight text-sm">
                            {todo.priority}
                        </p>
                        <p className="font-extralight text-sm">30min</p>
                    </div>
                    <PiEyesFill className="text-white text-2xl" />
                </SwipeableListItem>
            </SwipeableList>
        </div>
    );
};

export default ToDoItem;
