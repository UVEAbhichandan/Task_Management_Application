import { connect, useDispatch } from 'react-redux';
import './TaskForm.css'
import { useEffect, useState } from 'react';
import Header from './Header';

function TaskForm(props) {
  const { editTask, tasks } = props;
  const dispatch = useDispatch()
  const [task, setTask] = useState({ name: '', desc: '', date: '' });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, []);

  const handleAdd = () => {
    const taskList = !tasks ? [task] : [...tasks, task];

    dispatch({
      type: 'ADD',
      payload: taskList,
    });
    setTask({ name: '', desc: '', date: '' });
  }
  return (
    <div>
      <Header />
      <div className='form'>
        <h1>TASK FORM</h1>
        <label htmlFor='name'>TASK NAME:</label>
        <input required id='name' value={task.name} onChange={(v) => setTask({ ...task, name: v.target.value })}></input> <br />
        <label htmlFor='desc'>DESCRIPTION:</label>
        <input required id='desc' value={task.desc} onChange={(v) => setTask({ ...task, desc: v.target.value })}></input> <br />
        <label htmlFor='date'>DUE DATE:</label>
        <input required id='date' type='date' value={task.date} onChange={(v) => setTask({ ...task, date: v.target.value })} required></input> <br />
        <button onClick={handleAdd}>ADD TASK</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ editTask, tasks }) => ({ editTask, tasks });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
