import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: 'home', path: '/dashboard' },
    { name: 'Nudge Library', icon: 'library_books', path: '/library' },
    { name: 'Learning Center', icon: 'school', path: '/learning' },
    { name: 'My Community', icon: 'group', path: '/community' },
    { name: 'Strategy Sessions', icon: 'event_note', path: '/sessions' },
    { name: 'My Website', icon: 'language', path: '/my-website' },
    { name: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 flex flex-col h-full p-4 border-r-0 bg-slate-50 w-64 rounded-r-3xl z-50">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-extrabold text-violet-700 font-headline">GrowthNudge</h1>
        <p className="text-xs text-slate-500 font-label">Oxygen Dashboard</p>
      </div>
      <nav className="flex-grow">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-300 ease-in-out ${
                isActive 
                ? 'bg-violet-100 text-violet-700' 
                : 'text-slate-600 hover:bg-violet-50'
              }`}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              <span className="font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-4">
        <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <span>Upgrade to Elite</span>
        </button>
        <div className="flex items-center px-4 py-3 text-slate-600 cursor-pointer hover:text-violet-700 transition-colors">
          <span className="material-symbols-outlined mr-3">logout</span>
          <span className="font-semibold">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
