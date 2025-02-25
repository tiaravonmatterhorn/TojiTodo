const ProfileCard = ({ user }) => {
    return (
        <div className="flex flex-col items-center bg-amber-500 rounded-2xl shadow-md shadow-amber-500/10 w-full h-[20vh]">
            <img src="../assets/profile_image.png" />
            <h1>{user.firstName}</h1>
            <p>You can do this!</p>
            <div>
                <h3>Streak</h3>
                <p>5 Days</p>
            </div>
        </div>
    );
};
export default ProfileCard;
