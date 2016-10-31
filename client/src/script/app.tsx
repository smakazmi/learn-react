import * as React from "react"
import * as ReactDOM from "react-dom"
import '../style/style.scss'
import 'jquery'
import 'bootstrap-sass'

var App = (props) => {
  return <h1 className="text-primary">{props.appName}</h1>;
}

ReactDOM.render(<App appName='React Sample App!'></App>, document.querySelector('.app-container'));