import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import HealthMetrics from './components/HealthMetrics'
import Profile from './components/Profile'
import Diary from './components/Diary'

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Diary':
        return <Diary />;
      case 'Analytics':
        return <Analytics />;
      case 'Health Metrics':
        return <HealthMetrics />;
      case 'Profile':
        return <Profile />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[600px] glass-card">
            <h2 className="text-3xl font-manrope font-bold mb-4">{currentView}</h2>
            <p className="text-on-surface-variant">This feature is coming soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background font-inter text-on-background selection:bg-primary/30">
      {/* Background blobs for depth */}
      <div className="fixed top-0 left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-all duration-700" />
      <div className="fixed bottom-0 right-[10%] w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[150px] pointer-events-none transition-all duration-700" />
      
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 ml-[280px] p-10 z-10 transition-opacity duration-300">
        {renderView()}
      </main>
    </div>
  )
}

export default App
