import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
    return (
        <div className="index-container">
                <Link to={`/assessment`}>
                    <button className="btn">Click to Play Quiz</button>
                </Link>
        </div>
    )
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/assessment" component={App} />
            <Route path="/" component={Index} />            
        </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
