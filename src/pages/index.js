import { Box } from '@mui/material'
import React from 'react'
import { Inter } from '@next/font/google'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { dummyAPI } from '@/Redux/Actions/AuthUser'
import Index from './dashboard'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dummyAPI())
  }, [])
  return (
    <Index />
  )
}

export default Home
