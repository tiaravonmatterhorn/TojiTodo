import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        token: authToken,
        status: authStatus,
        error: authError,
        login,
    } = useAuth();

    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (authStatus === "succeeded") {
            navigate("/home");
        }
    }, [authStatus, navigate]);

    const handleChange = (e) => {
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginCredentials);
    };

    return (
        <section className="flex flex-col bg-neutral-100 text-white px-4 py-2 rounded-md min-h-screen justify-center">
            <div className="flex flex-col bg-indigo-900  text-white px-4 py-2 rounded-md justify-center h-[80vh] shadow-xl shadow-indigo-500/50">
                <h1 className="text-3xl font-light text-center">Login</h1>
                <form
                    className="flex flex-col gap-2 py-8 rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-2 py-8 rounded-md">
                        <label
                            htmlFor="email"
                            className="font-light text-left px-1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-full px-2 py-1 my-2 rounded-md bg-indigo-700 h-12"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 py-8 rounded-md">
                        <label
                            htmlFor="password"
                            className="font-light text-left px-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-2 py-1 my-2 rounded-md bg-indigo-700 text-white h-12"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        className="mt-14 bg-amber-500 text-white px-4 py-2 rounded-md z-20 w-1/2 mx-auto"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                {authStatus === "failed" && (
                    <p className="text-sm text-center">{authError}</p>
                )}
            </div>
        </section>
    );
};

export default LoginPage;
