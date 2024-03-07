import { useState } from "react";
import CustomImput from "./CustomImput";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTasks] = useState("");

    const onChange = (e) => {
        setTasks(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomImput
                label="Adicionar tarefas ..."
                value={task}
                onChange={onChange}
            />
        </div>
    );
};

export default AddTask;
