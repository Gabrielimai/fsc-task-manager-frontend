import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

import CustomImput from "./CustomImput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTasks] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTasks(e.target.value);
    };

    const handleTaskSddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                iscompleted: false,
            });
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomImput
                label="Adicionar tarefas ..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskSddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
