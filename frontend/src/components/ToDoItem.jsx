const ToDoItem = ({ todos }) => {
    return (
        <div className="flex flex-col gap-2 bg-indigo-900  text-white px-4 py-2 rounded-md">
            <h3 className="text-xl font-light text-center">Katzenklo</h3>
            <div className="flex flex-col gap-1 py-2 rounded-md">
                <p className="font-extralight text-sm">Hard</p>
                <p className="font-extralight text-sm">30min</p>
            </div>
        </div>
    );
};

export default ToDoItem;
