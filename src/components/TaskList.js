import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between py-3 border-b border-gray-300 last:border-b-0">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="h-5 w-5 text-blue-600 rounded border-2 border-blue-600 focus:ring-0"
            />
            <span className={task.completed ? 'line-through text-gray-600 ml-2' : 'text-gray-800 ml-2'}>
              {task.text}
            </span>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;


