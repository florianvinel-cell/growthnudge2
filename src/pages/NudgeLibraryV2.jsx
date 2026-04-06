import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const nudges = [
  {icon: 'location_on', category: 'Local SEO', title: 'The 2026 Google Visibility Blueprint', time: '8 min', level: 'Advanced', progress: 15},
  {icon: 'edit_note', category: 'High-Conversion Copy', title: 'Emotional Triggers for SaaS Landing Pages', time: '5 min', level: 'Beginner', progress: 100, completed: true},
  {icon: 'ads_click', category: 'Meta Ads', title: 'Retargeting Framework for High-Ticket Offers', time: '12 min', level: 'Intermediate', progress: 45},
  {icon: 'corporate_fare', category: 'Business Setup', title: 'Optimizing Your Entity for Global Tax Efficiency', time: '25 min', level: 'Expert', progress: 5},
  {icon: 'psychology_alt', category: 'High-Conversion Copy', title: 'The Art of the Irresistible Upsell', time: '3 min', level: 'Beginner', progress: 100, completed: true},
  {icon: 'trending_up', category: 'Meta Ads', title: 'Creative Testing Strategy for Video Ads', time: '15 min', level: 'Intermediate', progress: 70},
]

const NudgeLibraryV2 = () => {
  return (
    <div className="flex bg-surface min-h-screen font-body text-on-background antialiased">
      <Sidebar />
      <main className="flex-1 ml-64 pt-24 pb-12 px-12 min-h-screen">
        {/* Hero Section & Progress */}
        <section className="mb-12 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl text-primary tracking-tight leading-none mb-4 font-extrabold">Nudge Library</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Access your curated database of high-growth tactics. Each Nudge is a micro-action designed to move the needle on your business health.
            </p>
          </div>
          <div className="w-full md:w-80 bg-surface-container-low p-6 rounded-2xl">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-label-sm uppercase font-bold tracking-widest text-on-surface-variant text-[10px]">Current Progress</p>
                <h3 className="font-headline text-2xl font-bold leading-tight">12/48 <span className="text-sm font-medium text-on-surface-variant">Done</span></h3>
              </div>
              <div className="bg-secondary-fixed-dim/20 text-secondary px-2 py-1 rounded text-[10px] font-bold">25%</div>
            </div>
            <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000 w-[25%]" style={{backgroundColor: '#2ECC71', boxShadow: '0 0 8px rgba(46,204,113,0.5)'}}></div>
            </div>
            <p className="mt-3 text-[11px] text-on-surface-variant">Total Nudges Completed this month.</p>
          </div>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20">All Growth</button>
          {['Local SEO', 'High-Conversion Copy', 'Meta Ads', 'Business Setup'].map(cat => (
            <button key={cat} className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">{cat}</button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {nudges.map((nudge, i) => (
            <div key={i} className={`bg-surface-container-lowest p-8 rounded-[1.5rem] group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden ${i === 3 ? 'md:mt-8' : ''} ${i === 4 ? 'lg:mt-4' : ''}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl">
                  <span className="material-symbols-outlined text-[#6C2BD9]" style={{fontVariationSettings: "'FILL' 1"}}>{nudge.icon}</span>
                </div>
                <label className="relative flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" defaultChecked={nudge.completed} />
                  <div className="w-6 h-6 border-2 border-outline-variant rounded-md peer-checked:bg-[#2ECC71] peer-checked:border-[#2ECC71] flex items-center justify-center transition-all">
                    <span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
                  </div>
                </label>
              </div>
              <p className="text-label-sm font-bold uppercase tracking-widest text-[#6C2BD9] mb-2 text-[10px]">{nudge.category}</p>
              <h4 className="font-headline text-lg text-on-background mb-4 group-hover:text-primary transition-colors font-extrabold">{nudge.title}</h4>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm">{nudge.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">bar_chart</span>
                  <span className="text-sm">{nudge.level}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high">
                <div className="h-full rounded-full" style={{
                  width: `${nudge.progress}%`,
                  backgroundColor: nudge.completed ? '#2ECC71' : '#6c2bd9'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-white transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs">1</button>
            <button className="w-10 h-10 rounded-full text-on-surface-variant font-bold text-xs hover:bg-white transition-all">2</button>
            <button className="w-10 h-10 rounded-full text-on-surface-variant font-bold text-xs hover:bg-white transition-all">3</button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-white transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <p className="text-label-sm text-on-surface-variant italic text-sm">Showing 6 of 48 growth nudges available this week.</p>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  )
}

export default NudgeLibraryV2
