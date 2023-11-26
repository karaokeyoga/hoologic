import { NOTO_SANS_JP } from '@/utilities/fonts'
import { WHITE } from '@/utilities/styles'
import { Box, SxProps } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { FC } from 'react'

// constants

const SX = { fontFamily: NOTO_SANS_JP.style.fontFamily, fontWeight: 'bold', textShadow: `-0.5px 0 #000, 0 0.5px #000, 0.5px 0 #000, 0 -0.5px #000` }
const SX_JAPAN = { color: WHITE, fontSize: 65, textTransform: 'uppercase' }
const SX_TOKYO = { bottom: 3, color: blueGrey[50], display: ['none', 'inline'], fontSize: 57, position: 'relative' }

// components

export const Location: FC = () => (
  <Box sx={{ position: 'absolute', right: -2.5 }}>
    <Box component="span" sx={{ ...SX, ...SX_TOKYO } as SxProps}>
      東京
    </Box>

    <Box component="span" sx={{ ...SX, ...SX_JAPAN }}>
      <> Japan</>
    </Box>
  </Box>
)
