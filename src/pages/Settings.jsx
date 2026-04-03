import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Settings = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-grow min-h-screen">
        <Header />
        <div className="p-8 max-w-2xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-headline text-on-surface leading-tight tracking-tight">Settings</h2>
            <p className="text-lg text-slate-500 mt-2">Manage your account preferences and connected platforms.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-headline mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-slate-500 text-sm font-semibold mb-1">Email Address</label>
                  <input className="bg-surface-container-high border-none rounded-xl p-3 text-on-surface font-medium" defaultValue="alex@rivers-edge.com" type="email" />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-500 text-sm font-semibold mb-1">Display Name</label>
                  <input className="bg-surface-container-high border-none rounded-xl p-3 text-on-surface font-medium" defaultValue="Alex Rivers" type="text" />
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-headline mb-4">Connected Platforms</h3>
              <p className="text-slate-500 text-sm mb-4">Connect your business accounts to power your GrowthNudges.</p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-blue-600">google</span>
                    <span className="font-bold">Google Business Profile</span>
                  </div>
                  <span className="text-slate-400 font-semibold text-xs uppercase tracking-widest">Connect</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-pink-600">photo_camera</span>
                    <span className="font-bold">Instagram Business</span>
                  </div>
                  <span className="text-slate-400 font-semibold text-xs uppercase tracking-widest">Connect</span>
                </button>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
              Save changes
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings
