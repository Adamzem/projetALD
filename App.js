import React from 'react'
import AppContainer from './Component/Root'
import reducers from './Redux/reducer'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducers, middleware)
// console.disableYellowBox = true

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
