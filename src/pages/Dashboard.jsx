import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-grow min-h-screen">
        <Header />
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-headline text-on-surface leading-tight tracking-tight">My Website</h2>
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

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Live Preview Card */}
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

            {/* Health Score */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)] flex flex-col items-center justify-center text-center space-y-6">
              <h3 className="text-2xl font-headline">Website Health</h3>
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-surface-container" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="82.93" strokeWidth="12"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-extrabold text-on-surface font-headline">85%</span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Optimal</span>
                </div>
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
          </div>

          {/* Kinetic Insights */}
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

          {/* Expert CTA Section (Prompted by requirements) */}
          <section className="bg-surface-container-lowest p-10 rounded-3xl border border-violet-100 shadow-xl shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-headline font-bold text-on-surface leading-tight mb-4">Focus on your business. Let us handle the technical growth.</h2>
              <p className="text-slate-600 text-lg">Hire a UENI Expert to audit your site, optimize your local SEO, or write your marketing copy. Professional growth nudges, done for you.</p>
            </div>
            <Link to="/experts" className="whitespace-nowrap px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 transition-transform active:scale-95 flex items-center space-x-3">
              <span className="material-symbols-outlined">star</span>
              <span>Hire an Expert</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
