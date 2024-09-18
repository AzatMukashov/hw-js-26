import React from "react";

interface Task {
    newText: string;
    onAddTask: () => void;
}

const Task: React.FC<Task> = ({newText, onAddTask}) => {
    return (
        <div className="task">
            <textarea
                className="task__textarea"
                rows={1}
                autoFocus
                placeholder="Add new task"
            >{newText}</textarea>
            <button
                className="task__submit"
                type="button"
                onClick={onAddTask}>Add
            </button>
        </div>
    );
};

export default Task;