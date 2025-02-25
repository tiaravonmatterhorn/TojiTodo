import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
    const user = {
        firstName: "Tiara",
        profileImage: "../assets/profile_image.png",
    };
    return (
        <section className="flex flex-col bg-neutral-100 text-white px-2 py-6 min-h-screen justify-start w-full">
            <ProfileCard user={user} />
            <div className="relative -top-6 flex flex-col bg-indigo-900  text-white rounded-2xl h-[60vh] shadow-xl shadow-indigo-500/50 w-full"></div>
        </section>
    );
};

export default ProfilePage;
