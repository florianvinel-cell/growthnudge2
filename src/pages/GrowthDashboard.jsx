import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const GrowthDashboard = () => {
  return (
    <div className="flex bg-surface min-h-screen font-body text-on-surface antialiased">
      <Sidebar />
      <main className="ml-64 pt-24 px-12 pb-12 min-h-screen flex-1">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="col-span-8 space-y-10">
            {/* Hero: The Daily Nudge */}
            <section className="relative rounded-[2rem] p-10 overflow-hidden shadow-2xl shadow-primary/20"
              style={{background: 'linear-gradient(135deg, #5300b9 0%, #6c2bd9 100%)'}}>
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="80" cy="20" fill="white" r="40"></circle>
                </svg>
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">The Daily Nudge</span>
                  <span className="flex items-center gap-1 text-white/80 text-xs font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Time to Complete: 2 mins
                  </span>
                </div>
                <h2 className="text-4xl font-headline text-white leading-tight mb-8 font-extrabold">Update your Google My Business hours for the holiday weekend</h2>
                <button className="bg-secondary-fixed-dim hover:bg-secondary-fixed text-on-secondary-fixed font-headline font-extrabold px-8 py-4 rounded-xl flex items-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-black/20">
                  TAKE ACTION NOW
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </section>

            {/* Community Feed */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline text-on-surface text-2xl font-bold">Community Feed</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-surface-container-low rounded-full text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">Latest</button>
                  <button className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold">Trending</button>
                </div>
              </div>
              <div className="space-y-6">
                {/* Feed Item 1 */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-b border-transparent hover:border-outline-variant/15 transition-all">
                  <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNw5tQHQSqlP7qz2LYcSl8TDRV80eNemy6t3Zg3U9egxqJye-FaTYEupYZ7O3fY2SGJJLQTZC_bccR2Sio3ONJ8w2tvJGBIlM9S5pE3StIyYI9WeSX9vlv4LEyXQQdSe136kGj-vOY793nsXthKjsTSFSwDqQyTJi9kqCWnZMtgkjkiaeYBdwdHtAFzmKemUIDU2huULZwT3qjz7OLvxuUvmzT0lIRwQkznyCCYpvCS60oNKMriS7h53gkPXrik1Vk1WfBpBcTTqQ" alt="Sarah Chen" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-headline font-bold text-on-surface leading-tight">Sarah Chen</h4>
                          <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Boutique Owner • New York</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-lg">
                          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                          <span className="text-[10px] font-black uppercase">Win</span>
                        </div>
                      </div>
                      <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">Just got my first lead from the SEO Nudge! The "long-tail keyword" strategy really works for local businesses. Highly recommend everyone finishes the Google Visibility module. 🚀</p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">celebration</span>
                          <span className="text-xs font-bold">42 Claps</span>
                        </button>
                        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">rocket_launch</span>
                          <span className="text-xs font-bold">12 Boosts</span>
                        </button>
                        <div className="ml-auto text-[10px] font-medium text-outline">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feed Item 2 */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
                  <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbL7nRht5KRziW6JU8ZNRfdkJENunRTlNIxMbIw77GDXS9t4r-GJhgJ4GzUWiz-gQb9gcXHmBTg-xPkcDjE4hFtnZwB5n2G0wPYhr-9-Gll62Nyk7er6RZi4dWG2o2fRPUhqWojw5y6uJ7mbhwWSRom3i2kvwCTTJ46NhuWNALJPqDiLzMEMYFgO2QfLnU1RuO3w11483HyfgoOpwj_Pc31_gsSVRv_ZmHMs5K5d6_0CHO69Kr2NO03BQZWF08itjx57ZRT7FI9o8K" alt="Marcus Thorne" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-headline font-bold text-on-surface leading-tight">Marcus Thorne</h4>
                          <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Coffee Roaster • Austin</p>
                        </div>
                      </div>
                      <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">Anyone tried the new AI caption tool for Instagram? Looking for tips on how to keep the tone "rugged" but professional.</p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">chat_bubble_outline</span>
                          <span className="text-xs font-bold">8 Comments</span>
                        </button>
                        <div className="ml-auto text-[10px] font-medium text-outline">5 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-8">
            {/* The Oxygen Metric */}
            <section className="bg-surface-container-lowest p-8 rounded-[2rem] text-center shadow-sm relative overflow-hidden">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-8">The Oxygen Metric</h4>
              <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-full h-full" style={{transform: 'rotate(-90deg)'}} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="#F3F3F3" strokeWidth="8"></circle>
                  <circle cx="50" cy="50" fill="none" r="45" stroke="url(#gradient-green)" strokeDasharray="282.7" strokeDashoffset="79.15" strokeLinecap="round" strokeWidth="8"></circle>
                  <defs>
                    <linearGradient id="gradient-green" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#006d37"></stop>
                      <stop offset="100%" stopColor="#4ae183"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-headline text-primary -mb-2 font-extrabold">72%</span>
                  <span className="text-[10px] font-bold text-secondary uppercase">Healthy</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-on-surface-variant px-4">Your visibility is up 12% this week. Keep completing nudges to reach 80%.</p>
            </section>

            {/* Next Nudges */}
            <section className="bg-surface-container-low rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline text-on-surface font-bold text-lg">Next Nudges</h4>
                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_horiz</span>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-5 rounded-2xl group cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center text-xl group-hover:bg-white/20 transition-colors">🔍</div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold font-headline mb-1">The 2026 Google Visibility Blueprint</h5>
                      <div className="flex items-center justify-between text-[10px] font-medium opacity-70 mb-3">
                        <span>Level: 5 min Nudge</span>
                        <span>80% Done</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden group-hover:bg-white/10">
                        <div className="h-full bg-secondary-fixed-dim" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl group cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center text-xl group-hover:bg-white/20 transition-colors">📱</div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold font-headline mb-1">Reels Mastery for Retailers</h5>
                      <div className="flex items-center justify-between text-[10px] font-medium opacity-70 mb-3">
                        <span>Level: 10 min Nudge</span>
                        <span>15% Done</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden group-hover:bg-white/10">
                        <div className="h-full bg-secondary-fixed-dim" style={{width: '15%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Expert Marketplace */}
            <section className="space-y-4">
              <h4 className="font-headline text-on-surface px-2 font-bold text-lg">Expert Marketplace</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-surface-container-highest/50 p-6 rounded-2xl flex items-center gap-4 group">
                  <div className="flex-1">
                    <h5 className="text-sm font-bold font-headline text-on-surface mb-1">Fix My SEO</h5>
                    <p className="text-[10px] text-on-surface-variant font-medium">Starting from $199</p>
                  </div>
                  <button className="bg-secondary text-white p-2 rounded-lg scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </button>
                </div>
                <div className="bg-surface-container-highest/50 p-6 rounded-2xl flex items-center gap-4 group">
                  <div className="flex-1">
                    <h5 className="text-sm font-bold font-headline text-on-surface mb-1">Speed Up My Shopify</h5>
                    <p className="text-[10px] text-on-surface-variant font-medium">Starting from $249</p>
                  </div>
                  <button className="bg-secondary text-white p-2 rounded-lg scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </button>
                </div>
              </div>
              <button className="w-full py-4 bg-transparent border-2 border-primary/20 text-primary font-headline font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-primary/5 transition-colors">Browse all Experts</button>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GrowthDashboard
