import { FaFire } from "react-icons/fa6";

const StreakCard = ({ streak }) => {
    const getStreakDays = (days) => {
        days = streak;
        if (streak <= 1) {
            return (
                <p className="text-indigo-900 text-2xl font-semibold">
                    {streak} Day
                </p>
            );
        } else {
            return (
                <p className="text-indigo-900 text-2xl font-semibold">
                    {streak} Days
                </p>
            );
        }
    };
    return (
        <div className="flex gap-4 items-center bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl shadow-md shadow-amber-500/10 w-full min-h-[10vh] h-auto px-6 py-8">
            <FaFire className="text-5xl text-indigo-900" />
            <div className="flex flex-col justify-center">
                <h3 className="text-indigo-900">Your Streak</h3>
                {getStreakDays()}
            </div>
        </div>
    );
};

export default StreakCard;
