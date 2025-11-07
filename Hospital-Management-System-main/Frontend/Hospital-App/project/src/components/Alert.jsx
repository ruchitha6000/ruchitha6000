import { useRef, useState } from "react";

const Alert = ({ severity, children }) => {
    const decorationClasses = {
        error: "bg-red-200 border-red-400, text-red-800",
        success: "bg-green-200 border-green-400 text-green-800",
        warn: "bg-yellow-200 border-yellow-400 text-yellow-800",
        info: "bg-blue-200 border-blue-400 text-blue-800"
    }

    return (
        <div className={`fixed top-20 right-10 z-10 flex inline-flex justify-between ${decorationClasses[severity]} border px-4 py-3 my-2 rounded `}
        role="alert">
        <span className="block sm:inline pl-2">
            {children}
        </span>
    </div>
    );
}

export default Alert;