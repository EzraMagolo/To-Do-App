import { createStore } from 'redux';
import taskReducer from '../redux/actions/reducers/taskReducer';

const store = createStore(taskReducer);

export default store;
