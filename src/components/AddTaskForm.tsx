import React, {useState} from 'react';
import './style.css';

interface AddTask {
    onAddTask: (text: string) => void;

}

const AddTaskForm: React.FC<AddTask> = ({onAddTask}) => {
    const [newText, setNewText] = useState('');
    const handleAddTask = () => {
        if (newText.trim()) {
            onAddTask(newText);
            setNewText('');
        }
    };
    return (
        <div className="task-form">
            <textarea
                className="task-form__textarea"
                rows={1}
                autoFocus
                placeholder="Add new task"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button
                className="task-form__submit"
                type="button"
                onClick={handleAddTask}>Add
            </button>
        </div>
    );
};

export default AddTaskForm;