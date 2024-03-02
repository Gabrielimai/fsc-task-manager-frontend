import { useEffect, useState } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        // Com o useEffect consguimos simular o DidMount como o WillUnmount

        // Ele é executado sempre que um state mudar
        console.log("component was mounted!");

        return () => {
            // essa função será executada quando o componente for removida do DOM
            console.log("I will unmount!");
        };
    }, []);

    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "está completa" : "não está completa"}</p>
        </>
    );
};

export default TaskItem;

// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log('component was mounted!')
//     }

//     componentWillUnmount(){
//         console.log('I will unmount!')
//     }

//     render() {
//         const { task } = this.props;

//         return (
//             <>
//                 <h1>{task.description}</h1>
//                 <p>{task.isCompleted ? "está completa" : "não está completa"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
