import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userSlice";

export const useUserData = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.user.userData);
    const status = useSelector((state) => state.user.userDataStatus);
    const error = useSelector((state) => state.user.userDataError);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUserData());
        }
    }, [status, dispatch]);

    return { data, status, error };
};
