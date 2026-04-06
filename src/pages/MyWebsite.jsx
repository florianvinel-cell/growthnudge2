import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const MyWebsite = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Header />
        
        {/* Dashboard Body */}
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Header Asymmetric */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-display-lg font-headline text-on-surface leading-tight tracking-tight text-5xl font-extrabold">My Website</h2>
              <p className="text-lg text-slate-500 max-w-lg mt-2">Managing your digital storefront has never been this fluid. Optimize, edit, and scale.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center space-x-2 px-6 py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">settings_ethernet</span>
                <span>DNS Settings</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-transform active:scale-95">
                <span className="material-symbols-outlined">edit</span>
                <span>Quick Edit</span>
              </button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Live Preview Card (Large) */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(83,0,185,0.04)] group">
              <div className="p-6 flex justify-between items-center border-b border-surface-container">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-400 px-3 py-1 bg-surface-container rounded-full">rivers-edge-consulting.com</span>
                </div>
                <div className="flex space-x-2">
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">desktop_windows</span>
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">tablet_mac</span>
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">phone_iphone</span>
                </div>
              </div>
              <div className="aspect-video bg-surface-container-low relative">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHa4wA3Wt5hUlxksA62f4Ue5L33qJUtIW9KbGuAuUGn_ghW6V44_5BNaAJcqAOpqA8XYP93caS2CXnyTc1rRTOVCJyCkQwJw84AMVBBnssQxTRqfJMELfvLdeUEMZhL6brSsbHRFvSEEzOXwZrwKAPf4pYnRZfZTZUGyDdGsMc4vQYiiaNXtCEYcIWb6XnulkFWelYZ7oufCVkWDd1V4nU0QO_SBRDFh2uEzW9bgYQi0IrYqEz36nQ7bf1GyrC2s1TCOAius8mg_Uc" alt="Website Preview" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-xl flex items-center space-x-2">
                    <span className="material-symbols-outlined">open_in_new</span>
                    <span>Launch Preview</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Health Score (Small) */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)] flex flex-col items-center justify-center text-center space-y-6">
              <h3 className="text-headline-md font-headline text-2xl font-bold">Website Health</h3>
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-surface-container" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="82.93" strokeWidth="12"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-extrabold text-on-surface font-headline">85%</span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Optimal</span>
                </div>
                <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
              </div>
              <div className="w-full space-y-3 pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">SEO Performance</span>
                  <span className="font-bold text-secondary">92%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Load Speed</span>
                  <span className="font-bold text-secondary">78%</span>
                </div>
              </div>
            </div>

            {/* Traffic Chart (Medium) */}
            <div className="md:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-title-lg font-headline text-xl font-bold">Traffic Momentum</h3>
                  <p className="text-sm text-slate-400">Total visits this month</p>
                </div>
                <select className="bg-surface-container-high border-none rounded-lg text-xs font-bold py-2 pl-3 pr-8 focus:ring-primary focus:ring-1">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                </select>
              </div>
              {/* Visualization Placeholder */}
              <div className="h-56 w-full flex items-end gap-3 px-2">
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[40%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[55%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[45%]"></div>
                <div className="flex-1 bg-primary rounded-t-lg h-[75%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[60%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[65%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[85%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[70%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[95%]"></div>
                <div className="flex-1 bg-surface-container-high rounded-t-lg hover:bg-primary/20 transition-colors h-[80%]"></div>
                <div className="flex-1 bg-secondary rounded-t-lg h-[100%] shadow-[0_-10px_20px_rgba(0,109,55,0.1)]"></div>
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
                <span>Day 21</span>
                <span>Day 30</span>
              </div>
            </div>

            {/* Domain Management (Medium) */}
            <div className="md:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
              <h3 className="text-title-lg font-headline mb-6 text-xl font-bold">Domain Infrastructure</h3>
              <div className="space-y-4">
                {/* Primary Domain */}
                <div className="p-4 bg-violet-50 rounded-xl flex items-center justify-between group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-container p-2 rounded-lg text-white">
                      <span className="material-symbols-outlined text-lg">dns</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Primary Domain</p>
                      <p className="text-xs text-on-surface">rivers-edge-consulting.com</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                </div>
                {/* Domain Detail List */}
                <div className="space-y-4 px-2">
                  <div className="flex items-center justify-between py-2 border-b border-surface-container/50">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-slate-400">lock</span>
                      <span className="text-sm font-medium text-slate-600">SSL Certificate</span>
                    </div>
                    <span className="text-xs font-bold text-secondary">Active</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-surface-container/50">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-slate-400">event</span>
                      <span className="text-sm font-medium text-slate-600">Auto-Renewal</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface">Oct 24, 2025</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-surface-container/50">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-slate-400">mail</span>
                      <span className="text-sm font-medium text-slate-600">Workplace Email</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface">5 Active Seats</span>
                  </div>
                </div>
                <button className="w-full mt-2 py-3 text-sm font-bold text-primary hover:bg-violet-50 transition-colors rounded-xl flex items-center justify-center space-x-2">
                  <span>Manage Subdomains</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Kinetic Insights (Bottom Row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface-container-high rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Page Load</p>
                <p className="text-xl font-extrabold text-on-surface">1.2s</p>
              </div>
            </div>
            <div className="p-6 bg-surface-container-high rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Conversion</p>
                <p className="text-xl font-extrabold text-on-surface">4.8%</p>
              </div>
            </div>
            <div className="p-6 bg-surface-container-high rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-tertiary shadow-sm">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Viewers</p>
                <p className="text-xl font-extrabold text-on-surface">12 active</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MyWebsite
