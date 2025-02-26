import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, fetchToDoById, updateToDo } from "../redux/todoSlice";
import { useEffect } from "react";

export const useToDoById = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todo.toDo);
    const status = useSelector((state) => state.todo.toDoStatus);
    const error = useSelector((state) => state.todo.toDoError);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchToDoById(id));
        }
    });

    const updateToDoById = (updatedToDo) => {
        dispatch(updateToDo(updatedToDo));
    };

    const deleteToDoById = (id) => {
        dispatch(deleteToDo(id));
    };

    return { data, status, error, updateToDoById, deleteToDoById };
};
