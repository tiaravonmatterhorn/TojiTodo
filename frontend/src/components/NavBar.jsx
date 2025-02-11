import { IoMenu } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex flex-row justify-between bg-indigo-900 text-white px-4 py-2 h-14 items-center shadow-md z-10">
            <IoMenu className="text-2xl" />
            <IoPerson className="text-2xl rounded-full border border-white" />
        </div>
    );
};

export default NavBar;
