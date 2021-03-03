import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'

import HomePage from './pages/Homepages/HomePage.component.jsx'

const HatPage = (props) => {
    console.log(props)
    return <div>Hat page</div>
}

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="shop/hats" component={HatPage} />
        </div>
    )
}

export default App
