import React,{ Component } from 'react';
import './App.css';
import axios from "axios"
import Home from "./Home"
import Show from "./components/Show"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { getToken, setToken, logout} from './services/auth'
import {
  Router,
  Route,
  Link,
} from 'react-router-dom'
const history=require('history').createBrowserHistory()

//header file for auth
let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}


class App extends Component {
  state={
    id:[],
    title:[],
    url:[],
    train_score:[],
    test_score:[],
    user : "",
    errorMsg : '',
    isAuthenticated : false,
    hasError : false
  }

  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = {...this.state}
    data[e.target.name] = e.target.value

    this.setState(data)
  }

  
  logout = () =>{
    let data = {...this.state}
    //reset everything on logout
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""
    setToken("")

    this.setState(data)

  }

  getData=()=>{
    if (this.state.id[0])return null
    axios.get('main/',header)
    .then(data=>{
      let newState={...this.state}
      data.data.datum.forEach((item)=>{
        newState.id.push(item._id)
        newState.title.push(item.title)
        newState.train_score.push(item.train_acc)
        newState.test_score.push(item.test_acc)
        newState.url.push('http://placehold.it/300x300')
      })
      
      this.setState(newState)
    })
  }

  loginHandler = (e) => {
    e.preventDefault()
    axios.post('auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      if(response.data.token){
        setToken(response.data.token)
        
        let data = {...this.state}
        data.user = response.data.username
        data.isAuthenticated = true
        data.hasError = false

        this.setState(data)
        .then(()=>{
        this.getData()
        history.push('/')
      })
      }
      
    })
    .catch(err =>{
      let data = {...this.state}
        data.hasError = true
        this.setState(data)

    })
  }

  registerHandler = (e) => {
    e.preventDefault()
    axios.post('auth/register',{username:this.state.username,password:this.state.password,email:this.state.email})
    .then( response => {
      console.log(response)
      this.loginHandler(e)
      history.push('/')
    })
    .catch(err=>{
      console.log(err)
      
    })
  }

  componentWillMount(){
    if (getToken()){
      let data = {...this.state}
      data.isAuthenticated = true
      data.hasError = false
      
      this.setState(data)
    }
  }

  render() {
    const logged=(this.state.isAuthenticated)?<Link className='text-white logout' onClick={this.logout} to='/' >Logout</Link>:<Link to='/signup' className='text-white'>Signup</Link>;
    const isAuth=(this.state.isAuthenticated)?<Home state={this.state} getData={this.getData} that={this} />:<Login change={this.changeHandler} login={this.loginHandler} />;
    console.log(this.state.isAuthenticated)
    return (
      <div className='background-app'>
      <Router history={history}>
      <nav className='bg-dark p-1 d-flex flex-row justify-content-between'>
        <Link to='/' className='text-white'>Home</Link>
        {logged}
      </nav>
        <Route exact path='/' render={()=>isAuth} />
        <Route path='/show/:id' render={()=><Show auth={this.state.isAuthenticated} />} />
        <Route path='/signup' render={()=><Signup change={this.changeHandler} register={this.registerHandler} />} />
      </Router>
      </div>
    )
  }
}



export default App

