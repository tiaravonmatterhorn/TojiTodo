import profileImage from "../assets/profile_image.png";
import { MdModeEdit } from "react-icons/md";

const ProfileCard = ({ user }) => {
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl shadow-md shadow-amber-500/10 w-full min-h-[15vh] h-auto pt-4 pb-8 relative">
            <MdModeEdit className="absolute top-4 right-4 text-xl text-indigo-900 cursor-pointer" />
            <div className="flex flex-col gap-1 items-center mt-6 my-4">
                <img className="w-20 h-20 rounded-full" src={profileImage} />
                <h1 className="text-indigo-900 text-lg font-semibold">
                    {user.first_name} {user.last_name}
                </h1>
                <p className="text-indigo-900 text-sm">
                    Productive since {formatDate(user.created_at)}
                </p>
            </div>
        </div>
    );
};
export default ProfileCard;
