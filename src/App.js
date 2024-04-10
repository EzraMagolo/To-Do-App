import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'; // Import Tailwind CSS here

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">To Do App</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;


