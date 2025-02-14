import React, { useState } from "react";

const SegmentedControl = ({ options, onChange }) => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="flex bg-indigo-500 p-1 rounded-lg">
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`flex-1 px-4 py-2 text-center rounded-lg text-white ${
                        selected === option.value
                            ? "bg-indigo-800 shadow font-bold"
                            : "text-gray-500"
                    }`}
                    onClick={() => {
                        setSelected(option.value);
                        onChange(option.value);
                    }}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default SegmentedControl;
