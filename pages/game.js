import MainLayout from '@/layouts/main'
import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Container } from '@mui/material'
import Page from '@/components/Page'

const RootStyle = styled(Page)({
  height: '100%',
})

const Game = () => {
  return (
    <MainLayout>
      <RootStyle title="SGL | Products" id="move_top">
        <Container sx={{ paddingTop: '5rem' }} maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              Game is in progress
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </MainLayout>
  )
}

export default Game
