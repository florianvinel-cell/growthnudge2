import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const NudgeLibrary = () => {
  const nudges = [
    { title: "Optimize Google Business Profile", time: "5 min", boost: "+12% Visibility", category: "SEO", icon: "google" },
    { title: "Fix Broken Links", time: "3 min", boost: "+5% Conversion", category: "Technical", icon: "link_off" },
    { title: "Update META descriptions", time: "10 min", boost: "+8% Click-thru", category: "SEO", icon: "description" },
    { title: "Setup Facebook Pixel", time: "15 min", boost: "Ad Tracking", category: "Marketing", icon: "ads_click" },
    { title: "Optimize Image Alt Text", time: "8 min", boost: "+4% Image Search", category: "SEO", icon: "image" },
    { title: "Revamp Hero Headline", time: "12 min", boost: "+20% Engagement", category: "Copywriting", icon: "edit_note" },
  ];

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-grow min-h-screen">
        <Header />
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-headline text-on-surface leading-tight tracking-tight">Nudge Library</h2>
            <p className="text-lg text-slate-500 max-w-lg mt-2">Bite-sized growth actions designed to give your business oxygen.</p>
          </div>

          <div className="flex space-x-4 border-b border-slate-200">
            <button className="px-6 py-3 font-bold text-primary border-b-2 border-primary">All Nudges</button>
            <button className="px-6 py-3 font-semibold text-slate-500 hover:text-primary transition-colors">SEO</button>
            <button className="px-6 py-3 font-semibold text-slate-500 hover:text-primary transition-colors">Marketing</button>
            <button className="px-6 py-3 font-semibold text-slate-500 hover:text-primary transition-colors">Technical</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nudges.map((nudge, index) => (
              <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-violet-50 text-primary rounded-xl">
                    <span className="material-symbols-outlined">{nudge.icon}</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wider">{nudge.category}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{nudge.title}</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-slate-500 text-sm">
                    <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                    <span>{nudge.time}</span>
                  </div>
                  <div className="flex items-center text-secondary text-sm font-bold">
                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                    <span>{nudge.boost}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all transform active:scale-95">
                  Take Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default NudgeLibrary
