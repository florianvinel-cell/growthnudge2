import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const DailyNudge = () => {
  return (
    <div className="flex bg-background min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Special TopNavBar for Daily Nudge */}
        <header className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-[0px_12px_32px_rgba(83,0,185,0.06)]">
          <div className="flex justify-between items-center w-full px-8 py-4">
            <div className="flex items-center gap-6">
              <span className="text-xl font-['Plus_Jakarta_Sans'] font-extrabold bg-gradient-to-br from-violet-600 to-violet-400 bg-clip-text text-transparent">Daily Nudge</span>
              <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-surface-container-low rounded-full">
                <span className="text-label-sm font-label text-secondary font-bold uppercase tracking-wider">Step 1 of 5</span>
                <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed-dim w-1/5"></div>
                </div>
                <span className="text-label-sm font-label text-on-surface-variant font-medium">Update Google My Business Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-zinc-100/50 transition-colors">
                <span className="material-symbols-outlined text-zinc-500">account_circle</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-grow flex flex-col md:flex-row p-6 md:p-10 gap-10 overflow-y-auto pb-24">
          {/* Video Section (Left) */}
          <section className="flex-[3] flex flex-col gap-6">
            <div className="group relative aspect-video w-full rounded-2xl bg-surface-container-high overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-violet-200/50">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDesOed_Vy5ntwgpzqfU9creSA7bYO0i1vsgWJMbhPNOGiu-DeVAGjm8YKjebGiGP_tfsBW--WSRX7-YePKTLSw0iWahFA6ALrmwAKDQBBs9scFX8YoJGn5wN4FcicFrZX42WAgYv4AnvwJYsE0XJGv0yFn8sjakSofPCzssUHxpBI0_auwhWsEv6uhHns_u5_N_5g2g1UgVJR_TUXv3K7DkYJ8LtP6rJOtf2Xq0kGa_7bPWbqRKku2crm3U2Aimuhttwq5uRKbITSa" alt="Video Guide" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex items-center w-full gap-4">
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-colors">
                    <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                  </button>
                  <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-fixed-dim w-1/3"></div>
                  </div>
                  <span className="text-white text-label-sm">04:12 / 12:45</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-headline-md font-headline text-on-surface text-3xl font-bold">Tutorial: Optimizing your Presence</h1>
              <p className="text-body-md text-on-surface-variant max-w-2xl leading-relaxed">In this NotebookLM generated summary, we dive deep into why holiday hours and special event timing significantly impact your local SEO rankings.</p>
            </div>
          </section>

          {/* Panel Section (Right) */}
          <aside className="flex-[2] flex flex-col gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(83,0,185,0.06)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">edit_calendar</span>
                </div>
                <h2 className="text-title-lg font-headline text-on-surface text-xl font-bold">Current Task Details</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                  <p className="text-body-md text-on-surface leading-snug">Log into your <span className="font-semibold text-primary">Google Business Profile</span> using your admin credentials.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
                  <p className="text-body-md text-on-surface leading-snug">Navigate to the <span className="font-semibold">"Info"</span> tab located on the left-hand navigation sidebar of your dashboard.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
                  <p className="text-body-md text-on-surface leading-snug">Locate the <span className="font-semibold text-secondary">"Special Hours"</span> section. This is typically used for holiday adjustments or temporary closures.</p>
                </div>
              </div>
              <div className="mt-10 p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary flex gap-4">
                <span className="material-symbols-outlined text-secondary">tips_and_updates</span>
                <p className="text-label-sm text-on-secondary-fixed-variant italic">Tip: Businesses that update their hours regularly see a 15% higher interaction rate from customers searching nearby.</p>
              </div>
            </div>
            
            <div className="p-6 bg-primary-container/10 rounded-xl border border-primary/10">
              <h3 className="text-label-sm font-bold text-primary-container uppercase tracking-widest mb-3">Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Direct Link to Dashboard</span>
                  <span className="material-symbols-outlined text-sm text-outline">open_in_new</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Holiday Schedule Template</span>
                  <span className="material-symbols-outlined text-sm text-outline">download</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Bottom Navigation Bar (Sticky Footer) */}
        <footer className="fixed bottom-0 left-64 right-0 h-20 bg-white/80 backdrop-blur-xl z-50 flex items-center px-10 border-t border-outline-variant/10 shadow-[0px_-8px_24px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-on-surface-variant font-semibold hover:bg-surface-container transition-all active:scale-95">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-label-sm text-zinc-400 font-medium">Coming up next:</span>
                <span className="text-body-md font-semibold text-on-surface flex items-center gap-2">
                  Confirm Address Details
                </span>
              </div>
              <button className="pulse-primary bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
                <span>Complete Step & Next</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default DailyNudge
