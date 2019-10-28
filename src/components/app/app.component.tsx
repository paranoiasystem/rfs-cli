import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg'
import './app.component.css'
import { SimpleService } from '../../services/simple/simple.service'
import { injector } from '../../utils/injector';

export class App extends Component {

  @injector(SimpleService)
  simpleService!: SimpleService;

  constructor(public props: object) {
    super(props)
  }

  componentDidMount() {
    console.log(this.simpleService.getSimple())
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
