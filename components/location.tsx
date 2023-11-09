import { NOTO_SANS_JP } from '@/utilities/fonts'
import { Box } from '@mui/material'
import { FC } from 'react'

// components

export const Location: FC = () => (
  <Box className="location" sx={{ fontFamily: NOTO_SANS_JP.style.fontFamily, fontWeight: 'bold' }}>
    <Box className="location--city" component="span">
      <>東京 </>
    </Box>

    <Box className="location--japan" component="span">
      Japan
    </Box>
  </Box>
)
