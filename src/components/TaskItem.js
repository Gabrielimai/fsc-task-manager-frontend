const TaskItem = ({task}) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>
                {task.isCompleted ? "está completa" : "não está completa"}
            </p>
        </>
    );
};

export default TaskItem;
