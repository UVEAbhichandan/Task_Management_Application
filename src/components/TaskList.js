import { connect, useDispatch, useSelector } from 'react-redux';
import './TaskList.css'
import Header from './Header';
import { useNavigate } from "react-router-dom";

function TaskList(props) {
    const navigate = useNavigate();
    const { tasks } = props;
    const dispatch = useDispatch();

    const onEditorDelete = (task, isEdit = false) => {
        dispatch({
            type: 'EDIT_OR_DELETE',
            payload: { editTask: task, tasks: tasks.filter((value) => value != task) },
        });
        if (isEdit) {
            navigate("/");
        }
    };
    return (
        <>
            <Header />
            <h1>task list</h1>
            {tasks?.map((task, index) => <div key={index + 'i'} className="card">
                <div
                    className="content">
                    <span>Task name: {task.name} </span>
                    <span>Descripion: {task.desc}</span>
                    <b>Due Date: {task.date} </b>
                </div>
                <div className='buttons'>
                    <button onClick={() => onEditorDelete(task, true)}>EDIT</button>
                    <button onClick={() => onEditorDelete(task)}>DELETE</button>
                </div>
            </div>)}
        </>
    )
}
const mapStateToProps = ({ tasks }) => ({ tasks });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
