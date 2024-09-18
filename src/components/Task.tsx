import React from "react";

interface TaskProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({id, text, onDelete}) => {
    return (
        <div className="task">
            <span className="task__text">{text}</span>
            <button
                className="task__delete"
                type="button"
                onClick={() => onDelete(id)}
                aria-label="delete task">delete
            </button>
        </div>
    );
};

export default Task;