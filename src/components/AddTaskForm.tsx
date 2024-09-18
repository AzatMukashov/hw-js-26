import React, {useState} from "react";

interface AddTask {
    // newText: string;
    onAddTask: (text: string) => void;
    // onTextChange: (text: string) => void;

}

const AddTaskForm: React.FC<AddTask> = ({onAddTask}) => {
    const [newText, setNewText] = useState("");
    const handleAddTask = () => {
        if (newText.trim()) {
            onAddTask(newText);
            setNewText("");
        }
    };
    return (
        <div className="task">
            <textarea
                className="task__textarea"
                rows={1}
                autoFocus
                placeholder="Add new task"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button
                className="task__submit"
                type="button"
                onClick={handleAddTask}>Add
            </button>
        </div>
    );
};

export default AddTaskForm;