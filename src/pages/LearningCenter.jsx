import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const LearningCenter = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Header />
        
        <div className="p-12 space-y-16">
          {/* Hero Header Section */}
          <section className="max-w-6xl mx-auto space-y-4">
            <h1 className="text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
              Marketing <span className="text-primary">Learning Center</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl font-body">
              Unlock growth with our expert-led marketing guides. Master the kinetic tools of digital momentum and editorial strategy.
            </p>
          </section>

          {/* Featured Guide: Hero Card */}
          <section className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-[0px_12px_32px_rgba(83,0,185,0.06)] flex flex-col md:flex-row min-h-[400px]">
              <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wider rounded-full">Featured Guide</span>
                  <span className="text-slate-400 text-sm">• 15 min read</span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight text-on-surface">Mastering Local Search: The 2024 Blueprint</h2>
                <p className="text-lg text-on-surface-variant">Learn how to dominate your local market using our proprietary GrowthNudge signals and SEO layering techniques.</p>
                <div className="pt-4">
                  <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[0.98] transition-all">
                    Start Learning Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2JIeRAwtmqAUCP541yIN4BLXJIzCUTV6sR8gEL14iL295al7zeLRJ66Xy-fK3NRZPd23pMRaqNzcXpFoExD2AB4aiiBXI-qkz0_8bRAcpQCW9tiQLICcRPtklKKgc8Zbdll_S3yytFyOG37Suod5vchFa8-rQgzXwZrGOIdUbPu010D2gyJSinHHS000UDtgamxtIGrTsHvJWzJdQ_iKU7aoEeyrf7e6T0wR2ikU6iqBXrLzfYvGMgKCqmKqaM1H8vVAxf1L1QIK" alt="Featured Guide" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Category Grid */}
          <section className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-end">
              <h3 className="text-2xl font-extrabold">All Learning Paths</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">All</button>
                <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold hover:bg-surface-variant transition-colors">SEO</button>
                <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold hover:bg-surface-variant transition-colors">Copywriting</button>
                <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold hover:bg-surface-variant transition-colors">Paid Ads</button>
              </div>
            </div>

            {/* 3-Column Guide Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-[0px_12px_32px_rgba(83,0,185,0.06)] transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMKtQoDDKfE1EvdkjWWm126ltuVRnzk5v2zCD0nDzCc0DsglZECLNVl7wKYh4_ugiEdG1SB53FS4220zRp9ivbEojOXJEgfMkxS56bEstVIVgPwgCWV3EiAiCok8JR5ToRfG9ZftBzRf8UibVTnP1w9tC3cyld3yQFONQzP1-vBTM-YOnTRIo5ChVSIud4WUwYqRqW8jzbkJbwjf_7AItquhqmjsCikIJXHJYLv2DWoYB9dfFm-LzZTAZdSPzEa4_Fb7xUUGiqEYs" alt="SEO Guide" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">12 MIN READ</div>
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Local SEO</span>
                  <h4 className="text-xl font-extrabold leading-snug">The Google Maps Dominance Framework</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Step-by-step instructions on optimizing your GMB profile for maximum organic reach in your city.</p>
                  <div className="pt-2 flex items-center justify-between">
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                      Read Guide <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <span className="text-[10px] font-bold">COMPLETED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-[0px_12px_32px_rgba(83,0,185,0.06)] transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYUciv73tWfHNIJbnmhaEVuU1JbipypJLsvgkbUlh3PvBtfN_h43-4XbsJOP8gvPa2ZKTCd4u2ht49CQx5NSzMc499IYt13SGI16q18xLQownlw0glsX2Gg5S19uBGrkpfHVcsCx0n-gBGePAojMR0flcqHNT6MZ2NpStuVOjMfrQUXNnweDMwD1YSWfYKeaAcTaD_MdcXJ4vdfJn_axLusPfzWZycHfq3mX_UHqIm1KaKPzb_QBh0g4ivvuDTTLf9f1CuVcuJiA2w" alt="Copywriting Guide" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">8 MIN READ</div>
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">High-Conversion Copy</span>
                  <h4 className="text-xl font-extrabold leading-snug">Words That Sell: The Psychological Trigger List</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Master the 12 semantic nudges that turn casual visitors into high-value repeat customers.</p>
                  <div className="pt-2">
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                      Read Guide <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-[0px_12px_32px_rgba(83,0,185,0.06)] transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVrZ5sF-ZuUb2etDde2drEuBtKeRxMBGSWuLpPTu0qVww0aetx-tSjz0C9VEEAPVxtg0CoNKct48f_QOnG2g5cmjagecFfql0MUfMi2B8_RXPvX6n4yXfixIqNoJ8KLWu24d8-5j9PMBrIBAb4j3J6El-_KiezXNfFWBqeVLjmPFLm3mB8ifD5NjYI9yI_0u7ooyPNLz7Eqsz9db61JVBxi8g_G3bT133Ntz5PLvXDoGNAhGT9_8xiNA6ca1ZVrzed4SI6T5RcLBZI" alt="Meta Ads Guide" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">20 MIN READ</div>
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Meta Ads</span>
                  <h4 className="text-xl font-extrabold leading-snug">Scaling Social: Beyond the Boost Button</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">How to architect an automated sales funnel using advanced Facebook Pixel events and retargeting.</p>
                  <div className="pt-2">
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                      Start Learning <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-[0px_12px_32px_rgba(83,0,185,0.06)] transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChBOfd7p-8W8kLPFHFSjZIPVHaBE_i3uOQytDvDf-juv4il9cPGzC8ppQDuS74fSPPPXxPHtHb0ovEzEFkn9EvBDplfRIZQlLnYcAuANzR1AEHSDBP-CiftL5JUni4gTUrkhyG9NJT0DdHaDdsTU4mjfO0nZyLYv_rDcBnu_qnsVZJxh6zRp1wDv65CmSpEI-22sofkSsDpozVIHEaBGRhf53FZKEKf4Xch4SIRSbGdWF6I4JDiUe2ITpN9Gp3x7_t__PldMv7KbXP" alt="Business Strategy Guide" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">15 MIN READ</div>
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Business Strategy</span>
                  <h4 className="text-xl font-extrabold leading-snug">Retention Mastery: Reducing Churn by 40%</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Implement the 'Loop Framework' to keep your clients engaged and satisfied through automated check-ins.</p>
                  <div className="pt-2">
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                      Read Guide <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-[0px_12px_32px_rgba(83,0,185,0.06)] transition-all duration-300">
                <div className="h-48 overflow-hidden relative flex items-center justify-center bg-violet-50">
                  <span className="material-symbols-outlined text-6xl text-primary/20">auto_awesome</span>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">COMING SOON</div>
                </div>
                <div className="p-8 space-y-4 opacity-70">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">AI Marketing</span>
                  <h4 className="text-xl font-extrabold leading-snug">Generative Growth: Prompt Engineering for CEOs</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">A deep dive into using AI to automate content production without losing your brand's unique voice.</p>
                  <div className="pt-2">
                    <span className="text-slate-400 font-bold text-xs">Unlocking in 4 days</span>
                  </div>
                </div>
              </div>

              {/* Card 6: Interactive CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h4 className="text-xl font-extrabold">Have a Guide Request?</h4>
                <p className="text-sm text-white/80">Tell us what you want to learn next and our team of experts will build a custom learning path.</p>
                <button className="w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">Submit a Topic</button>
              </div>
            </div>
          </section>

          {/* Habit Loop Progress Tracker */}
          <section className="max-w-6xl mx-auto pb-20">
            <div className="bg-surface-container-low rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-extrabold">Your Knowledge Momentum</h3>
                <p className="text-slate-600">You've completed 3 guides this week. Keep the streak alive to unlock your "Strategy Session" credit.</p>
                <div className="pt-4 flex gap-3">
                  <div className="h-3 flex-1 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-fixed-dim w-[60%] shadow-[0_0_12px_#4ae183]"></div>
                  </div>
                  <span className="text-xs font-bold text-secondary">60% to Goal</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default LearningCenter
