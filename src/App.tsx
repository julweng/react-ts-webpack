import React, { Fragment, useState, useContext, useReducer } from 'react'
import { Link } from '@reach/router'
import { Parent, Child } from './context'
import { Store } from './store'
import { ITodo } from './interfaces'
import { FormElem } from './types'
import './App.css'

export default function App(props: any): JSX.Element {
  // to do list form
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  // count button
  const reducer = (state = 0, action: string) => {
    switch (action) {
      case 'ADD':
        return state + 1
      case 'SUB':
        return state - 1
      case 'RES':
        return 0
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  // rick and morty stuff
  const { storeState, dispatchAction } = useContext(Store)

  return (
    <Fragment>
      <h1>Todo List</h1>
      <Parent><Child /></Parent>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>{todo.complete ? 'Incomplete' : 'complete'}</button>
            <button type="button" onClick={() => deleteTodo(index)}>&times;</button>
          </Fragment>
        ))}
      </section>
      <br />
      <hr />
      <br />
      <>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={() => dispatch('ADD')}>+</button>
        <button onClick={() => dispatch('SUB')}>-</button>
        <button onClick={() => dispatch('RES')}>reset</button>
      </>
      <br />
      <hr />
      <br />
      <div>
        <h1 className="episode-header">Rick and Morty</h1>
        <p>Pick your favorite episode!!!</p>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favorite(s): {storeState.favorites.length}</Link>
      </div>
      {props.children}
    </Fragment>
  )
}