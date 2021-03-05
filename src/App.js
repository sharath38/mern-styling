import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/Homepages/HomePage.component.jsx'
import shopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={shopPage} />
            </Switch>
        </div>
    )
}

export default App
