
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskButtons from './components/TaskButtons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import './css/component.css'


function App() {



  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskButtons />}></Route>
          <Route path='/TaskList' element={<TaskList />}></Route>
          <Route path='/create-task' element={<TaskForm />}></Route>
          <Route path='/Item-List' element={<ItemList />}></Route>

        </Routes>
      </BrowserRouter>
      </div>     
    </div>
  );
}

export default App;
