import React from 'react'
import { Provider } from 'react-redux'
import store from './services/store/reducer'
import { hydrateRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root')!;
const root =  hydrateRoot(container,
<React.StrictMode>
  <Provider store={store}>
    <App /> 
  </Provider>
</React.StrictMode>
);

export const render = () => root.render; 