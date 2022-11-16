import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import store from './services/store/reducer'
import  { App }  from './App'
import { Rules } from './pages'

export const render = (url:string) => renderToString (
    <React.StrictMode>
        <Provider store={store}>
            <Rules /> 
        </Provider>
    </React.StrictMode>
)
