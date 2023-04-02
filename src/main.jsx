import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import initialState from './context/InitialState'
import reducer from './context/Reducer'
import  Provider  from './context/Provider'

const root = document.querySelector('#root')

const conRoot = ReactDOM.createRoot(root)

conRoot.render(
<Router>
    <Provider initialState={initialState} reducer={reducer}>
        <App />
    </Provider>
</Router>
)

