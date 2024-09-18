import React from "react";

interface TaskProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({id, text, onDelete}) => {
    return (
        <div className="task-form">
            <div className="task-form__form">
                <span className="task-form__text">{text}</span>
                <button
                    className="task-form__submit"
                    type="button"
                    onClick={() => onDelete(id)}
                    aria-label="delete task">delete
                </button>
            </div>
        </div>
    );
};

export default Task;