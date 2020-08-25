import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from './components/TodoApp';
import {Login} from './components/Login'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg'

class App extends Component {

    state = {"isLogged":false}

    componentDidMount(){
        localStorage.setItem("orlando.gelves@mail.escuelaing.edu.co","orlando")
    }

    
    handleChangeLogged = (boolean) =>{
        this.setState({
            "isLogged":boolean
        })
    }

    render() {
        const LoginView = () => (
            <Login handleLogin={this.handleChangeLogged}/>
        );
        
        const TodoAppView = () => (
            <TodoApp/>
        );
        let routeLogged;
        if(!this.state.isLogged && !localStorage.getItem("isLogged")){
            routeLogged = <Redirect to="/"/>
        } else {
            routeLogged = <Redirect to="/todo"/>
        }

        return (

            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        {routeLogged}
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        )};

}



export default App;
