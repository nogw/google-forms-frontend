import React, { useContext, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import { Container } from './styles';
import api from '../../services/api'
import jwtDecode from 'jwt-decode';
import { Context } from '../../UserProvider'
import  { Redirect, useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

const Login: React.FC = () => {   
  interface IInputs {
    email: string;
    password: string;
    username: string;
    emailRegister: string;
    passwordRegister: string;
    passwordRegisterConfirm: string;
  }

  const initializeValue: IInputs = {
      email: "",
      password: "",
      username: "nogw",
      emailRegister: "gabrielnogueiraoliveira@gmail.com",
      passwordRegister: "mari1981",
      passwordRegisterConfirm: "mari1981",
  }

  const [MenuNow, setMenuNow] = useState('login')
  const [inputs, setInputs] = useState(initializeValue)
  const [user, setUser] = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  let history = useHistory()

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const handleCreateAccount = () => {
    setIsLoading(true)
    inputs.username.length <= 2 && console.log('name is lower')
    !re.test(String(inputs.emailRegister).toLowerCase()) && console.log('email is not valid')
    inputs.passwordRegister.length <= 7 && console.log('password is lower')
  
    if (inputs.username.length > 2 && inputs.passwordRegister.length > 7 && re.test(String(inputs.emailRegister).toLowerCase())) {
      // create a new user in db
      const newUser = async () => {
        await api.post('/user/register', {
          name: inputs.username,
          email: inputs.emailRegister,
          password: inputs.passwordRegister,
          passwordConfirm: inputs.passwordRegisterConfirm,
        })
        .then((user) => {
          const decoded: any = jwtDecode(user.data.token)

          localStorage.setItem('jwt', JSON.stringify(user.data.token));
          
          setUser(decoded)

          history.push("/")
        })
        .catch((err) => {
          console.log(err.response)
        })
      }

      newUser()
    }
  }

  const handleLogin = () => {
    setIsLoading(true)
    !re.test(String(inputs.email).toLowerCase()) && console.log('email is not valid')
    inputs.password.length <= 7 && console.log('password is lower')
  
    if (inputs.password.length > 7 && re.test(String(inputs.emailRegister).toLowerCase())) {
      //login
      const Login = async () => {
        await api.post('/user/login', {
          email: inputs.email,
          password: inputs.password,
        })
        .then((user) => {
          const decoded: any = jwtDecode(user.data.token)

          localStorage.setItem('jwt', JSON.stringify(user.data.token));
          
          setUser(decoded)

          history.push("/")
        })
        .catch((err) => {
          setIsLoading(false)
        })
      }

      Login()
    }
  }

  return (
    <Container>
      {
        isLoading ? (
          <CircularProgress/>
        ) : (
          <>
            <CSSTransition 
              in={MenuNow === 'login'}
              unmountOnExit 
              timeout={500} 
              classNames="menu-primary"
            >
              <main>
                <h1>Welcome back!</h1>
                <h4>We're so excited to see you again!</h4>

                <div className="input">
                  <label htmlFor="email">EMAIL</label>
                  <input type="text" name="email" onChange={handleChange} value={inputs.email}/>
                </div>
                <div className="input">
                  <label htmlFor="password">PASSWORD</label>
                  <input type="password" name="password" onChange={handleChange} value={inputs.password}/>
                </div>
                <button onClick={handleLogin}>Login</button>
                <p>Need an account? <span onClick={() => setMenuNow('register')}>Register</span></p>
              </main>
            </CSSTransition>
            <CSSTransition 
              in={MenuNow === 'register'}
              unmountOnExit 
              timeout={500} 
              classNames="menu-primary"
            >
              <main>
                <h1>Create an account</h1>
                <div className="input">
                  <label htmlFor="username">USERNAME</label>
                  <input type="text" name="username"  onChange={handleChange} value={inputs.username}/>
                </div>
                <div className="input">
                  <label htmlFor="email">EMAIL</label>
                  <input type="text" name="emailRegister"  onChange={handleChange} value={inputs.emailRegister}/>
                </div>
                <div className="input">
                  <label htmlFor="password">PASSWORD</label>
                  <input type="password" name="passwordRegister" onChange={handleChange} value={inputs.passwordRegister}/>
                </div>
                <div className="input">
                  <label htmlFor="passwordRegisterConfirm">PASSWORD CONFIRM</label>
                  <input type="password" name="passwordRegisterConfirm" onChange={handleChange} value={inputs.passwordRegisterConfirm}/>
                </div>

                <button onClick={handleCreateAccount}>Continue</button>
                <p><span onClick={() => setMenuNow('login')}>Already have an account?</span></p>
              </main>
            </CSSTransition>
          </>
        )  
    }
    </Container>
  )
}

export default Login;