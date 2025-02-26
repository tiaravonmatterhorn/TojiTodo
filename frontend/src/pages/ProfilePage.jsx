import ProfileCard from "../components/ProfileCard";
import StreakCard from "../components/StreakCard";
import TodoCounterCard from "../components/TodoCounterCard";
import { useToDos } from "../hooks/useToDos";
import { useUserData } from "../hooks/useUserData";

const ProfilePage = () => {
    const {
        data: userData,
        status: userDataStatus,
        error: userDataError,
    } = useUserData();

    const { data: toDoData } = useToDos();

    const getCompletedTodosCount = (todoList) => {
        const completedTodos = todoList.filter((todo) => todo.completed);
        return completedTodos.length;
    };

    return (
        <section className="max-w-xl mx-auto flex flex-col gap-6 bg-neutral-100 text-white px-2 py-6 min-h-screen justify-start w-full">
            <ProfileCard user={userData} />
            {/* <div className="relative -top-10 flex flex-col bg-indigo-900  text-white rounded-2xl h-[60vh] shadow-xl shadow-indigo-500/50 w-full"> */}
            <StreakCard streak={userData.streak_days} />
            {/* </div> */}
            <TodoCounterCard count={getCompletedTodosCount(toDoData)} />
        </section>
    );
};

export default ProfilePage;
