import { SiGoogletasks } from "react-icons/si";

const TodoCounterCard = ({ count }) => {
    return (
        <div className="flex gap-4 items-center bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl shadow-md shadow-amber-500/10 w-full min-h-[10vh] h-auto px-6 py-8">
            <SiGoogletasks className="text-5xl text-indigo-900" />
            <div className="flex flex-col justify-center">
                <h3 className="text-indigo-900">Tasks completed</h3>
                <p className="text-indigo-900 text-2xl font-semibold">
                    {count}
                </p>
            </div>
        </div>
    );
};

export default TodoCounterCard;
