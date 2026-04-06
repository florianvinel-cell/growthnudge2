import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const StrategySessions = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen pb-20">
        <Header />
        
        <div className="px-12 py-10 max-w-7xl mx-auto">
          {/* Hero Title */}
          <div className="mb-12">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Marketplace</span>
            <h1 className="text-display-lg text-on-surface font-extrabold tracking-tight leading-none mb-4 text-5xl">Strategy Sessions</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl font-body">Scale your business with on-demand expertise. Hand-picked specialists ready to optimize your growth funnel.</p>
          </div>

          {/* Featured Service Bar */}
          <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-1 mb-16 shadow-2xl shadow-primary/20">
            <div className="bg-white/5 backdrop-blur-md rounded-[22px] flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                  <span className="material-symbols-outlined text-white text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Need Help? Get a UENI Expert</h2>
                  <p className="text-primary-fixed font-medium">Personalized 1-on-1 strategy calls to unlock your business potential.</p>
                </div>
              </div>
              <button className="bg-secondary-fixed text-on-secondary-fixed font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-black/20">
                <span>Book Your Session</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Service Grid */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Service Card: SEO */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7JRym6Sv0ZL62VOWEe2n8mG2PrtlzlzaVtiVJiPzngde8C94_dgWg9WjyZ4afOg-c8QB2AwayM7_UON90ffR4ShSmpm273jRNfvLkkmgmr6mfqc6aRDDnRl-zB4-Dz7UPlSReNJCYVZ27pUp97JyOrlbzv7Ac60ZiDjpcAnUaRPPaK2-hXA0agRIVH5TBlHvC5dPHSLu-WkuEX14A4tk7Zbsd30l3D0jmIzUXC0bUfU-Np8OM6-0MQBbZQBdaoWb2gMT8XivFJHvv" alt="SEO Strategy" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-primary">High Impact</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-on-surface mb-3">Fix My SEO</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Boost your rankings with a full technical audit and keyword strategy optimized for 2024.</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Starting at</span>
                      <span className="text-xl font-extrabold text-on-surface">$249</span>
                    </div>
                    <button className="bg-secondary-fixed-dim hover:bg-secondary text-on-secondary-fixed-variant font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm">
                      Hire Expert
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Card: Shopify */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXqfsqUXv28Jm-xbY8GQxaMAojgkyOXtYYapqxGKjrVBfOA8tcq8FwjGqNasUs2v4pGzuo3Cx8taS07rNP1cEFjD3CKucOX-N5UdNL5eBQP5mZ6MlhZXd8cdpxJjdmMJQR-W9LcUhHNyZFwdIMQr0_LYBY6WsIIHUNDtKMVNdfW-ocKQSyYZ_rfdQbaOBU49vmOt30vmdZxlBXurOJNIuhlVxGMMkSXKZy8lDI7Rhbh4mJN0wHsVB28BebD5aESbaSg66ILNv6MVkw" alt="Shopify Speed" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-primary">Top Rated</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-on-surface mb-3">Speed Up My Shopify</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Reduce bounce rates. We'll optimize your assets and code for lightning-fast page loads.</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Starting at</span>
                      <span className="text-xl font-extrabold text-on-surface">$199</span>
                    </div>
                    <button className="bg-secondary-fixed-dim hover:bg-secondary text-on-secondary-fixed-variant font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm">
                      Hire Expert
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Card: Wix */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0px_12px_32px_rgba(83,0,185,0.04)] sm:col-span-2">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp-Wj5E0mnqd6H2z4eu497TqbuxaUcd2bKwwmtFJwwC2Y7PAPiu2-MzQ8QH_DY9KUaRp39BWdV2CejUvv7oIoiHyLG70JGjb5pDrHVvY1OrQHa6gydpSB_FqPry2WQPkCoXCLoPFte1AQyq6gCDtKuB-kPC2MrFKviuVZbHUW9bRSwSuy1pmY9wlTJKqqJpqyPI1U2Fs_r0tOjiTUvE6K1LODMWNLHkYm79KixJmQTqpf0hXCjBLdS4RoVXqrUQg5cBlxvQysnfHu8" alt="Wix Content" />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-amber-500 text-lg">star</span>
                      <span className="text-amber-600 font-bold text-sm">Most Popular Refresh</span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface mb-4">Wix Content Refresh</h3>
                    <p className="text-on-surface-variant text-base mb-8 leading-relaxed">Fresh copy, new visuals, and a modern layout refresh for your Wix site. Give your brand the editorial edge it deserves.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-on-surface">$350</span>
                        <span className="text-slate-400 line-through text-sm">$499</span>
                      </div>
                      <button className="bg-secondary-fixed-dim hover:bg-secondary text-on-secondary-fixed-variant font-bold px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-secondary/10">
                        Hire Expert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content (Asymmetric) */}
            <div className="md:col-span-4 space-y-8">
              {/* Featured Expert Card */}
              <div className="bg-surface-container-low rounded-3xl p-8 border border-white/50">
                <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Expert of the Month</h4>
                <div className="flex items-center gap-4 mb-6">
                  <img className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt-U_p_niHd2nhEMvKz7oiHdqGWFptwaALeCvKOuypTVT71FMRHChOF8lxlyiEHnbRteqKKj3cPjApH6WlRLiGm9eHHZa1aQgV2x6Vp2riEHNOlx0gwghysAMNjwuEs6nn3e9fluIDZL0mUYV5JHxm7c3gV-mdkd-xbPR301M-IILlxhQ39okIBTyrc6NGV21zuV0bzJDDKX9AVd1KlndpZ0SFwofPS1URg717gSR5c94XNa5Cm61lJioCfIvT2mB4dHae2N1RgSof" alt="Sarah Jenkins" />
                  <div>
                    <div className="font-bold text-lg text-on-surface">Sarah Jenkins</div>
                    <div className="text-sm text-secondary font-semibold">Growth Strategist</div>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">"I've helped over 50 startups increase their conversion rate by an average of 40% through targeted UI/UX nudges."</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    12+ Years Experience
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Former Shopify Principal
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-on-surface text-surface font-bold hover:bg-primary transition-colors">View Portfolio</button>
              </div>

              {/* Habit-Loop Tracker */}
              <div className="bg-white rounded-3xl p-8 shadow-[0px_20px_40px_rgba(0,109,55,0.05)] border border-secondary-container/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold text-on-surface">Weekly Progress</h4>
                    <p className="text-xs text-slate-500">Service Completion Goal</p>
                  </div>
                  <span className="text-2xl font-black text-secondary">75%</span>
                </div>
                <div className="flex items-end gap-1.5 h-24 mb-6">
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[40%]"></div>
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[65%]"></div>
                  <div className="flex-1 bg-secondary rounded-t-lg h-[90%] shadow-[0_0_15px_rgba(0,109,55,0.3)]"></div>
                  <div className="flex-1 bg-secondary rounded-t-lg h-[75%] shadow-[0_0_15px_rgba(0,109,55,0.3)]"></div>
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[20%]"></div>
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[0%]"></div>
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[0%]"></div>
                </div>
                <div className="bg-secondary-container/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                  </div>
                  <p className="text-xs font-semibold text-on-secondary-container">2 more sessions to hit your Oxygen Peak!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StrategySessions
