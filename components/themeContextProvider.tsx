import { THEME } from '@/utilities/theme'
import { ThemeProvider } from '@mui/material'
import { FC, ReactNode } from 'react'

// types

type _ThemeContextProviderProps = { children: ReactNode }

// components

export const ThemeContextProvider: FC<_ThemeContextProviderProps> = ({ children }) => <ThemeProvider theme={THEME}>{children}</ThemeProvider>
