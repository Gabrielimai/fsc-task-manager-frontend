// const TaskItem = ({task}) => {
//     return (
//         <>
//             <h1>{task.description}</h1>
//             <p>
//                 {task.isCompleted ? "está completa" : "não está completa"}
//             </p>
//         </>
//     );
// };

// export default TaskItem;

import React from "react";

class TaskItem extends React.Component {
    componentDidMount() {
        console.log('component was mounted!')
    }

    componentWillUnmount(){
        console.log('I will unmount!')
    }

    render() {
        const { task } = this.props;

        return (
            <>
                <h1>{task.description}</h1>
                <p>{task.isCompleted ? "está completa" : "não está completa"}</p>
            </>
        );
    }
}

export default TaskItem;
