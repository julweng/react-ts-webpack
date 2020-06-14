import React, { createContext } from 'react';

const {Provider, Consumer} = createContext({})

type ParentProps = {
  children: React.ReactNode
}

export const Parent = ({ children }: ParentProps): JSX.Element => {
  const text:string = 'random text'

  return <Provider value={text}>{children}</Provider>
}

export const Child = (): JSX.Element => {

  return (
    <Consumer>
      {text => <div>{text}</div>}
    </Consumer>
  )
}