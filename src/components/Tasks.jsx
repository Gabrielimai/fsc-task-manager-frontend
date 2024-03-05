import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

function Tasks() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");

            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-Container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <p>{lastTask.description}</p>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTasks) => (
                            <p>{completedTasks.description}</p>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;