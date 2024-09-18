import React from "react";

interface Props {
    text: string;
    onHandleClick: () => void;
}

const AddTaskForm: React.FC<Props> = ({text, onHandleClick}) => {
    return (
        <div className="add-task-form">
            <div className="add-task-form__form">
                <span className="add-task-form__text">{text}</span>
                <button
                        className="add-task-form__submit"
                        type="button"
                        onClick={onHandleClick}
                >delete</button>
            </div>
        </div>
    );
};

export default AddTaskForm;