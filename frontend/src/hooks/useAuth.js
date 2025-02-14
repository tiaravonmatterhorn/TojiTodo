import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const status = useSelector((state) => state.auth.status);
    const error = useSelector((state) => state.auth.error);

    const login = (credentials) => {
        if (status === "idle" || status === "failed") {
            dispatch(userLogin(credentials));
        }
    };

    return { token, status, error, login };
};
