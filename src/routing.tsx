import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './components/app'

const routes = [
    {
        path: '/',
        component: App,
        exact: true
    }
]

export class Routing extends Component {
    render() {
        return(
            <Router>
                {
                    routes.map((route) => {
                        return (route.exact && route.path && route.component) ? 
                            <Route 
                                exact
                                path={route.path} 
                                render={ (props) => <route.component {...props} /> } /> :
                            (route.path && route.component) ? 
                            <Route
                                path={route.path} 
                                render={ (props) => <route.component {...props} /> } /> :
                                <Route render={ (props) => <route.component {...props} /> } />
                    })
                }
            </Router>
        )
    }
}
