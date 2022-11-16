import React from 'react';
import UpdateTaskForm from "../components/UpdateTaskForm";
import { useParams } from 'react-router-dom';


function UpdateTask() {
    const param = useParams();
    console.log(param.id);
    return (
        <>
            <main>
                <UpdateTaskForm id={param.id} />
            </main>
        </>
    )
}

export default UpdateTask;