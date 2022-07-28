import React from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"

const app = () =>{
    return(
        <div className='App'>
            hello! 
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)