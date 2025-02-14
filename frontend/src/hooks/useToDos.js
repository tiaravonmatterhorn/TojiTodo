import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewToDo, fetchToDos, updateToDo } from "../redux/userSlice.js";

export const useToDos = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.toDos);
    const status = useSelector((state) => state.user.toDosStatus);
    const error = useSelector((state) => state.user.toDosError);

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
