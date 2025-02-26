import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewToDo, fetchToDos } from "../redux/todoSlice.js";

export const useToDos = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todo.toDos);
    const status = useSelector((state) => state.todo.toDosStatus);
    const error = useSelector((state) => state.todo.toDosError);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchToDos());
        }
    }, [status, dispatch]);

    const addToDo = (newToDo) => {
        dispatch(addNewToDo(newToDo));
    };

    return { data, status, error, addToDo };
};
