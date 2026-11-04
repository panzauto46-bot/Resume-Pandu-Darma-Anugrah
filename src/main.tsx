import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './glass.css'
import { initMotion } from './motion'

function Root() {
    // motion dipasang setelah React render, satu kali (idempoten + ada cleanup).
    useEffect(() => initMotion(), [])
    return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
)
