import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
  

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
        <input type="text" required>
          
        </input>
      </form>
    </Fragment>
  )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)