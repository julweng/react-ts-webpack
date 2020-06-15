import React, { Fragment, useEffect, useState, useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import { Parent, Child } from './context'
import { Store, StoreProvider } from './store'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

export default function App(): JSX.Element {
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

  // rick and morty episode search
  const {state, dispatchAction} = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatchAction({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  return (
    <Fragment>
      <h1>Todo List</h1>
      <Parent><Child /></Parent>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <>
        <div>{count}</div>
        <button onClick={() => dispatch('ADD')}>+</button>
        <button onClick={() => dispatch('SUB')}>-</button>
        <button onClick={() => dispatch('RES')}>reset</button>
      </>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>{todo.complete ? 'Incomplete' : 'complete'}</button>
            <button type="button" onClick={() => deleteTodo(index)}>&times;</button>
          </Fragment>

        ))}
      </section>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!!!</p>
      <section>
          {state.episodes.map((episode:any) =>{
            return (
              <section key={episode.id}>
                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                <div>{episode.name}</div>
                <section>
                  Season: {episode.season} Number: {episode.number}
                </section>
              </section>
            )
          })}
      </section>
    </Fragment>
  )
}

const root = document.getElementById('app-root')

ReactDOM.render(<StoreProvider><App /></StoreProvider>, root)