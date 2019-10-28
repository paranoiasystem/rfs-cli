import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg'
import './app.component.css'
import {injectable} from "tsyringe";
import { SimpleService } from '../../services/simple.service'

@injectable()
export class App extends Component {

  constructor(public props: object, private simpleService: SimpleService) {
    super(props)
  }

  componentDidMount() {
    console.log('props', this.props)
    console.log('wtf', typeof this.simpleService)
    console.log('wtf', this.simpleService)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the future.</p>
        </header>
      </div>
    )
  }
}
