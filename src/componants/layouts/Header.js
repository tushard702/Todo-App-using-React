import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Todo List</h1>
            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
  

export default Header;
