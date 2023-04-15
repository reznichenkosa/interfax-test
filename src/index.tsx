import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const a = 10

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
