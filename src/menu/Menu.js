import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return <div>
            <Link to="/"> All </Link> | 
            <Link to="/finished"> Finish </Link>
        </div>
    }
}

export default Menu