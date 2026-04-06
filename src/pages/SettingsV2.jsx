import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const SettingsV2 = () => {
  return (
    <div className="flex bg-background text-on-surface min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Header />

        <div className="p-12 max-w-6xl mx-auto space-y-12">
          {/* Settings Hero / Navigation */}
          <div className="flex flex-col gap-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-2">Oxygen Dashboard Control</p>
                <h2 className="font-headline font-extrabold text-5xl text-on-surface leading-tight">Your Nucleus</h2>
              </div>
            </div>
            <div className="flex gap-1 border-b border-surface-container-high">
              <button className="px-6 py-4 font-bold text-sm text-primary border-b-2 border-primary">Profile</button>
              <button className="px-6 py-4 font-semibold text-sm text-on-surface-variant hover:text-on-surface transition-colors">Subscription</button>
              <button className="px-6 py-4 font-semibold text-sm text-on-surface-variant hover:text-on-surface transition-colors">Notifications</button>
              <button className="px-6 py-4 font-semibold text-sm text-on-surface-variant hover:text-on-surface transition-colors">Security</button>
            </div>
          </div>

          {/* Bento Grid Settings Layout */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Profile Section (Left Main) */}
            <section className="col-span-12 lg:col-span-7 space-y-8">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-headline font-extrabold text-2xl">Profile Settings</h3>
                  <button className="text-primary text-sm font-bold flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-sm">edit</span>
                    Save Changes
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-8 mb-10">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUAgpbVEsXnUevH9qOfEvel41OoWhBTJ3PkE4RIoaU1kewy3jb3IYGPULCylSBjbwkef2AIl07tEkTiEmDJ8SaoTZa-96kuDzhkOMKTlunc2hi5QAwg5PaWIKdFEIkgXdlX3wve58WWm024QRY6cYqQGNupsDSRfVdHKpX_zIbQUJMr5bgh8tOUSCqZxhU5Cxl8d1hRYKCDtnwikWEXDnuoTsofIaKi98WgpEzEKg2NiHU8vTcM538JbhEzdXiRIgXEvEuaL9IpBHn" alt="Alex Rivers" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm">add_a_photo</span>
                      </button>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Alex Rivers</h4>
                      <p className="text-sm text-on-surface-variant mb-3">Professional Business Account</p>
                      <div className="flex gap-2">
                        <button className="text-xs px-4 py-2 bg-surface-container-high font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Remove</button>
                        <button className="text-xs px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">Replace</button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                      <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" type="text" defaultValue="Alex Rivers" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                      <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" type="email" defaultValue="alex@growthnudge.com" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Business Name</label>
                      <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" type="text" defaultValue="Rivers Digital Consultancy" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Identity Verification Card */}
              <div className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between border-l-4 border-primary">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Identity Verification</h4>
                    <p className="text-xs text-on-surface-variant">Your identity is verified as a Pro Business Member.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              </div>
            </section>

            {/* Subscription Section (Right Rail) */}
            <aside className="col-span-12 lg:col-span-5 space-y-8">
              <div className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white blur-3xl"></div>
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-primary-container blur-3xl"></div>
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-primary-fixed-dim font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Current Plan</p>
                      <h3 className="font-headline font-extrabold text-3xl">Pro Member</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-70">Next Billing Date</span>
                      <span className="font-bold">Oct 24, 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="opacity-70">Annual Amount</span>
                      <span className="font-bold">$499.00</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-white text-primary font-extrabold py-3 rounded-xl hover:bg-opacity-90 transition-all text-sm">Manage Billing</button>
                    <button className="w-full bg-primary-container/30 border border-white/20 text-white font-extrabold py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Compare Plans</button>
                  </div>
                </div>
              </div>

              {/* Growth Pulse */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
                <h4 className="font-headline font-extrabold text-lg mb-6">Growth Pulse</h4>
                <div className="space-y-6">
                  {[
                    {label: 'Nudge Credits', value: '84 / 100', pct: '84%'},
                    {label: 'Community Slots', value: '3 / 5', pct: '60%'},
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-on-surface-variant uppercase">{stat.label}</span>
                        <span className="text-secondary">{stat.value}</span>
                      </div>
                      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{
                          width: stat.pct,
                          background: 'linear-gradient(to right, #006d37, #4ae183)',
                          boxShadow: '0 0 8px rgba(74,225,131,0.5)'
                        }}></div>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-on-surface-variant italic leading-relaxed">
                    You've reached <span className="font-bold text-secondary">momentum phase</span> this month. Keep nudging to maintain elite status.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Danger Zone */}
          <section className="bg-error-container/20 p-8 rounded-xl border border-error/10 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-error">Archive Account</h4>
              <p className="text-sm text-on-surface-variant">Deactivating your account will pause all automated nudges and community visibility.</p>
            </div>
            <button className="bg-error text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm">Archive Oxygen</button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SettingsV2
