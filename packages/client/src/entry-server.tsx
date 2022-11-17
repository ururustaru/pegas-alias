import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './App'
import { Provider } from 'react-redux'
import store from './services/store/reducer'

export function render(url: string) {  //url:any, context:any
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>

        <App />
      </Provider>
    </StaticRouter>
  )
}

// return renderToString(
//   <React.StrictMode>
//     <StaticRouter location={url}>
//       <Provider store={store}>
//         <PageNavigation />
//         <Page />
//       </Provider>
//     </StaticRouter>
//   </React.StrictMode>
// )}