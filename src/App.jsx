import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NudgeLibrary from './pages/NudgeLibrary'
import ExpertHelp from './pages/ExpertHelp'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Dashboard after login */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<NudgeLibrary />} />
        <Route path="/experts" element={<ExpertHelp />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
