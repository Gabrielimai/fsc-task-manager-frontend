import React from "react";
import TaskItem from "./components/TaskItem";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.state = {
            tasks: [
                {
                    id: "1",
                    description: "Estudar Programação",
                    isCompleted: false,
                },
                {
                    id: "2",
                    description: "Ler",
                    isCompleted: true,
                },
            ],
        };
    }

    handleStateChange() {
        this.setState({
            tasks: [],
        });
    }

    render() {
        return (
            <>
                {this.state.tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
                <button onClick={this.handleStateChange}>Limpar tarefas</button>
            </>
        );
    }
}

export default App;

// import { useState } from "react";
// import TaskItem from "./components/TaskItem";

// const App = () => {
//     const [task, setTask] = useState([
//         {
//             id: "1",
//             description: "Estudar Programação",
//             isCompleted: false,
//         },
//         {
//             id: "2",
//             description: "Ler",
//             isCompleted: true,
//         },
//     ]);

//     return (
//         <>
//             {task.map((task) => (
//                 <TaskItem key={task.id} task={task} />
//             ))}
//         </>
//     );
// };

// export default App;
