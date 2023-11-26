import { AppContextProvider } from '@/components/appContextProvider'
import { Company } from '@/components/company'
import { Location } from '@/components/location'
import { Logo } from '@/components/logo'
import { Person } from '@/components/person'
import { Posts } from '@/components/posts'
import { ThemeContextProvider } from '@/components/themeContextProvider'
import '@/styles/index.scss'
import { POSTS_QUERY } from '@/utilities/general'
import { SANITY_CLIENT } from '@/utilities/sanity'
import { BREAKPOINTS } from '@/utilities/styles'
import type { _Post } from '@/utilities/types'
import { Box, CssBaseline, SxProps } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { FC, ReactNode } from 'react'

// types

type _RootLayoutProps = { children: ReactNode }

// metadata

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hoologic.io')
}

// constants

const FOOTER_HEADER_SX = {
  display: 'flex',
  height: 50,
  justifyContent: 'space-between',
  ml: 0,
  mr: 'auto',
  mt: 0,
  position: 'relative',
  transition: 'width 0.5s',
  whitespace: 'nowrap',
  width: BREAKPOINTS
}

// components

const RootLayout: FC<_RootLayoutProps> = async ({ children }) => {
  const posts = await SANITY_CLIENT.fetch<_Post[]>(POSTS_QUERY)

  return (
    <html lang="en-US">
      <body>
        <ThemeContextProvider>
          <CssBaseline />

          <AppContextProvider>
            <Box sx={{ mx: 'auto', my: 0, py: 4, width: BREAKPOINTS }}>
              <Box component="header" sx={{ ...FOOTER_HEADER_SX, mb: 4 } as SxProps}>
                <Company />

                <Logo />
              </Box>

              {children}

              <Posts posts={posts.filter(post => post.visible)} />

              <Box component="footer" sx={{ ...FOOTER_HEADER_SX, mb: 0 } as SxProps}>
                <Person />

                <Location />
              </Box>
            </Box>
          </AppContextProvider>
        </ThemeContextProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

export default RootLayout
