import React from 'react';
import Addtodo from './components/addtodo';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import ToDo from './components/ToDo';


const App = () => {
  return (
    <div>
    <Provider store={store}>
        <Addtodo/>
        <ToDo/>
  </Provider>,
  </div>
  )
}

export default App
