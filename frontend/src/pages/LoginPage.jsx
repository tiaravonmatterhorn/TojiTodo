const LoginPage = () => {
    return (
        <section className="flex flex-col bg-neutral-100 text-white px-4 py-2 rounded-md min-h-screen justify-center">
            <div className="flex flex-col bg-indigo-900  text-white px-4 py-2 rounded-md justify-center h-[80vh] shadow-xl shadow-indigo-500/50">
                <h1 className="text-3xl font-light text-center">Login</h1>

                <div className="flex flex-col gap-2 py-8 rounded-md">
                    <label
                        htmlFor="username"
                        className="font-light text-left px-1"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Email address"
                        className="w-full px-2 py-1 my-2 rounded-md bg-indigo-700 h-12"
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
                    />
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
