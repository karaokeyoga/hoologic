'use client'

import type { _Position } from '@/utilities/types'
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useMemo, useState } from 'react'

// types

type _AppContext = {
  postPosition?: _Position
  setPostPosition: Dispatch<SetStateAction<_Position | undefined>>
}

type _AppContextProviderProps = { children: ReactNode }

// context

export const APP_CONTEXT = createContext<_AppContext | null>(null)

// components

export const AppContextProvider: FC<_AppContextProviderProps> = ({ children }) => {
  const [postPosition, setPostPosition] = useState<_Position>()

  const appContext = useMemo(() => ({ postPosition, setPostPosition }), [postPosition])

  return <APP_CONTEXT.Provider value={appContext}>{children}</APP_CONTEXT.Provider>
}
