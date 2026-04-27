import { Home, PieChart, Activity, User, Settings, LogOut, BookHeart } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Diary', icon: BookHeart },
    { name: 'Analytics', icon: PieChart },
    { name: 'Health Metrics', icon: Activity },
    { name: 'Profile', icon: User },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] glass-sidebar z-20 flex flex-col p-6">
      <div className="flex items-center space-x-3 mb-12 px-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
          <Activity size={18} className="text-on-primary" />
        </div>
        <h1 className="text-2xl font-bold font-manrope bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">
          NutriFlow
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <div 
            key={item.name}
            className={`nav-item ${currentView === item.name ? 'active' : ''}`}
            onClick={() => setCurrentView(item.name)}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-2">
        <div className="nav-item" onClick={() => setCurrentView('Settings')}>
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div className="nav-item text-error hover:text-error hover:bg-error/10" onClick={() => alert('Logging out...')}>
          <LogOut size={20} />
          <span>Log Out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
