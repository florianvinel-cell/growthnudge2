import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NudgeLibrary from './pages/NudgeLibrary'
import ExpertHelp from './pages/ExpertHelp'
import Settings from './pages/Settings'
import BuilderPage from './pages/BuilderPage'
import Community from './pages/Community'
import LearningCenter from './pages/LearningCenter'
import StrategySessions from './pages/StrategySessions'
import DailyNudge from './pages/DailyNudge'
import MyWebsite from './pages/MyWebsite'
import GrowthDashboard from './pages/GrowthDashboard'
import HireExpert from './pages/HireExpert'
import NudgeLibraryV2 from './pages/NudgeLibraryV2'
import SettingsV2 from './pages/SettingsV2'

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
        <Route path="/community" element={<Community />} />
        <Route path="/learning" element={<LearningCenter />} />
        <Route path="/sessions" element={<StrategySessions />} />
        <Route path="/daily-nudge" element={<DailyNudge />} />
        <Route path="/my-website" element={<MyWebsite />} />
        <Route path="/growth-dashboard" element={<GrowthDashboard />} />
        <Route path="/hire-expert" element={<HireExpert />} />
        <Route path="/nudge-library-v2" element={<NudgeLibraryV2 />} />
        <Route path="/settings-v2" element={<SettingsV2 />} />
        <Route path="/builder-preview" element={<BuilderPage />} />
        <Route path="/*" element={<BuilderPage />} />
      </Routes>
    </Router>
  )
}

export default App
