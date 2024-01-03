import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskChart from './components/TaskChart';
function App() {

  return (
    <div className="content">
      <BrowserRouter>
       <Routes>
        <Route element={<TaskForm />} path='/' />
        <Route element={<TaskList />} path='/task-list' />
        <Route element={<TaskChart />} path='/chart' />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
