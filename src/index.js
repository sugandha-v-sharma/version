import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IncreaseCount from './IncreaseCount';
import  GetTime from './GetTime';
import DigitalClock from './DigitalClock';
import Form from './Form';
import Events from './Events'
import Login from './Login';
import LoginDetails from './LoginDetails';
import SpreadOperator from './SpreadOperator';
import TodoList from './TodoList';
import UseState from './ReactHooks/UseState';
import UseEffect from './ReactHooks/UseEffect';
import StateFull from './StateFull';
import DefaultProp from './DefaultProp';
import PropsValidation from './PropsValidation';
import Ref from './Ref';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Ref />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
