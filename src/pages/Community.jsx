import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Community = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Header />
        
        {/* Content Layout */}
        <div className="px-12 py-12 flex gap-12">
          {/* Community Feed (Left/Main) */}
          <div className="flex-1 space-y-10">
            <section>
              <h2 className="text-5xl font-extrabold text-on-surface font-headline tracking-tighter mb-2">Community Wins</h2>
              <p className="text-on-surface-variant text-lg">Real success from real entrepreneurs in the GrowthNudge network.</p>
            </section>
            
            {/* Post Composer */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(83,0,185,0.04)]">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxBY4qWDVhcTfr93Mi5NYVgvqwDis_Up2297FbPlrfc1LC2gV6bA1GRF29DpAGNpmLheDj2BACsjF1Tgg5VHa81o0szlnHL0m05eJ8jS5gI3SSPShzmWST7--klecMyfBzFd6Vpw7LNJeSVeiNnarN9_JKqRZUwu11RCyLfZNbOk9KUTr-zkaspbbem5iJkqr8C9pHzkWngQqagAICMGsY0hIZiIFKEhPAZLtrhmq7xIlTnR7bqFZiEStKAkHpK8XrUCwASFNDsJql" alt="User Profile" />
                <div className="flex-1">
                  <textarea className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary h-24 resize-none transition-all" placeholder="Share your win today..."></textarea>
                  <div className="flex justify-between mt-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"><span className="material-symbols-outlined">image</span></button>
                      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"><span className="material-symbols-outlined">link</span></button>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Post Win</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feed Content */}
            <div className="space-y-6">
              {/* Post 1 */}
              <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(83,0,185,0.04)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-1">
                  <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-bl-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span> Big Win
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <img className="w-14 h-14 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjir5MFvgr6D_ykIC2bovpLQDPQwNceL3Up1EpFhYEKJ5eL2pUcqDjZMsCAaRVR8h2edQyMMymW3r18c-snvOBTMoxE9JYBlq59vbZ5zWnY-qyPuHAC9JICUx1gPn8zguAqZx4fs-txI3hdLXnkibnp4z9cei53x7qzbl60D5p0Dc42FH5DKX3iUc8M7Sce-8u75G_yUJREuhNMnj66YIh8PD3iYioeAjaeSHI13AeX-whth8UzWVT2r0mUZoM779n_z0VcX9YSpa7" alt="Sarah Jenks" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-lg text-on-surface">Sarah Jenks</h3>
                      <span className="text-on-surface-variant text-sm px-2 py-0.5 bg-surface-container-high rounded-full">Local SEO Expert</span>
                      <span className="text-slate-400 text-xs">• 2h ago</span>
                    </div>
                    <p className="text-on-surface text-xl leading-relaxed font-medium mb-6">
                      Just got my first lead from the new landing page nudges! 🚀 This is a total game changer for my local clients.
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group/btn">
                        <div className="p-2 group-hover/btn:bg-primary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined">front_hand</span>
                        </div>
                        <span className="font-semibold text-sm">Clap (12)</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors group/btn">
                        <div className="p-2 group-hover/btn:bg-secondary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined">rocket_launch</span>
                        </div>
                        <span className="font-semibold text-sm">Rocket (8)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Post 2 */}
              <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(83,0,185,0.04)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-1">
                  <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-bl-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span> Milestone
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <img className="w-14 h-14 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeMfslEYcwZctv0x1oHsjXnS3f2qVxb2KzCH_cl2hGU8wS4EXZ1DI4tuDiVd9JRGBdbrnoZLA36VaKGJV1fd0e3I7Vlw84cIym8ZAd6LlZWAYi-44DG5KZJ8EI6z0low11CVFZ7HrvhDPSFSI0pDkN7eljRLsHa6M1DAavtzGtIjClbrYSCgNpueyVznx6EtxMvvfyk3GR0WxgwDQz8T6N-XkdChtC16tRrcRLZLbfbNL1PssfDj9B8mPvDceDdZir-FKHgDnTZRRj" alt="David Miller" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-lg text-on-surface">David Miller</h3>
                      <span className="text-on-surface-variant text-sm px-2 py-0.5 bg-surface-container-high rounded-full">Plumber</span>
                      <span className="text-slate-400 text-xs">• 5h ago</span>
                    </div>
                    <p className="text-on-surface text-xl leading-relaxed font-medium mb-6">
                      Hit a record $15k in revenue this month! The 'Strategy Sessions' helped me refine my pricing structure. Huge thanks to this community!
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group/btn">
                        <div className="p-2 group-hover/btn:bg-primary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined">front_hand</span>
                        </div>
                        <span className="font-semibold text-sm">Clap (42)</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors group/btn">
                        <div className="p-2 group-hover/btn:bg-secondary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
                        </div>
                        <span className="font-semibold text-sm text-secondary">Rocket (31)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Post 3 */}
              <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(83,0,185,0.04)] relative overflow-hidden group border-l-4 border-primary">
                <div className="flex items-start gap-6">
                  <img className="w-14 h-14 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkzpX9t2-_-wgL5s9lANRPmS-rAvsJH63ePrnInxd3JiA4LmU-65X7tzbm7YgBjza-gIOI1P0s9AR2gOLGza13KINWl2Ezpvr4I3qQi_FftYbVmf3KpjSsqOglJAEElheV4Fo3xUwE7oXzNGbuiW3X0fbONcLx9SXtDeG6FL61zLd-qgIQ_71kR57_j_WCF75OCjli7vdMH3CFwboHezlk3cGlC0o_f66zxoegRJXst6F3t-6mCTBOkp_w9DL2ybIyy4UZeWVJ4T1u" alt="Elena Torres" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-lg text-on-surface">Elena Torres</h3>
                      <span className="text-on-surface-variant text-sm px-2 py-0.5 bg-surface-container-high rounded-full">Design Studio</span>
                      <span className="text-slate-400 text-xs">• Yesterday</span>
                    </div>
                    <p className="text-on-surface text-xl leading-relaxed font-medium mb-6">
                      Finally hired my first VA. Scaling feels scary but GrowthNudge made the onboarding process so much clearer.
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-primary font-bold transition-colors group/btn">
                        <div className="p-2 bg-primary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>front_hand</span>
                        </div>
                        <span className="text-sm">Clap (18)</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors group/btn">
                        <div className="p-2 group-hover/btn:bg-secondary/10 rounded-full transition-all">
                          <span className="material-symbols-outlined">rocket_launch</span>
                        </div>
                        <span className="font-semibold text-sm">Rocket (4)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <aside className="w-80 space-y-8">
            <section className="bg-surface-container-low rounded-xl p-8">
              <h3 className="font-headline font-extrabold text-xl mb-6">Live Community Pulse</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <span className="text-sm font-semibold text-on-surface-variant">Active Now</span>
                  </div>
                  <span className="text-lg font-extrabold text-primary">1,204</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">emoji_events</span>
                    </div>
                    <span className="text-sm font-semibold text-on-surface-variant">Wins Today</span>
                  </div>
                  <span className="text-lg font-extrabold text-secondary">84</span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-4">Community Growth</p>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 font-medium">75% of goal reached this month</p>
                </div>
              </div>
            </section>
            
            <section className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(83,0,185,0.06)]">
              <h3 className="font-headline font-extrabold text-xl mb-6">Top Contributors</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ffgit_KHLt6HUkVEAZIiPiSU_k8PRjATnKnfVTEUETAnH_tigRyFQ6si8z6Z4noy6rcciK2xSazDhV6sZi9WE6epVaNBEHmGlxGygZqtyRXB-2DkfDdfq2bQEHvd_6NOmEAHAM3kfed-2b9iQAqdm-uhY18dZx6APf38_l_dZVctM4Lodsf7RBuLZ24KYTCIXtP1oirRUO5XEx67DaAQJ2wQHB448cTU7VmkheIUbuMTKR-zFQYVfEa-vFLExepVijkF6vjRzqWR" alt="Mark Wilson" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Mark Wilson</p>
                    <p className="text-xs text-on-surface-variant">42 Wins shared</p>
                  </div>
                  <div className="ml-auto">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBrtD9vB9fAS1Ss36diZSiSgGP4fIpWXZ9KuwbPPgEtukSSJKfNtnaw983XOMwSEAJPyCUDpfpoykBlMMfpPegh6N8feAO1fPbEftmTD3wMj9O38i7UpFfv9tEEMedT2urd5RRZ-_8f6Cj8Z7caMS-j_WuDtGD4zAicFiZeUP0og57Yhk5U406vPSw4UyRRxze2SqCqqLLQAg-0b8nvLDub9Oko2LDm-pHdogtmCJ2HwbWWQMcAjCv9NqnimPQy68UmTQATN8Bs2XW" alt="Lisa Chang" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-400 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">2</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Lisa Chang</p>
                    <p className="text-xs text-on-surface-variant">38 Wins shared</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <img className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDlgupxoPdzEW3ImDcWiHQP2Ys31Ee2grxYIXdcIImqDeU7hCLv9QILDvoLq8HF13SN29sfG8HmCO2NWtfinZfekmzqVDjsZ3aJH7awp43VzOnKvnTs2QdNxa7V4t-7oM1rTTbTc_LR2j_b4nsZINgzMilqip3X969i-7l5KJeYUooboYhr4t3O1sNgfG-TMuSmm016lKXEZz36wxKEtglLcoISxY8yaswrYQFt1DUlF063Mtlr6tTQWt90VAkdCCem1_UdzRW9OfS" alt="Julian Voss" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">3</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Julian Voss</p>
                    <p className="text-xs text-on-surface-variant">29 Wins shared</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-all border border-primary/10">View Leaderboard</button>
            </section>
            
            <section className="bg-gradient-to-br from-secondary to-on-secondary-fixed-variant rounded-xl p-8 text-white">
              <span className="material-symbols-outlined text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
              <h3 className="font-headline font-extrabold text-xl leading-tight mb-2">Build Your Winning Ritual</h3>
              <p className="text-white/80 text-sm mb-6">Posting just 1 win a week increases long-term business growth by 24% according to our data.</p>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">This Week's Streak</span>
                  <span className="text-xs font-bold">2/3</span>
                </div>
                <div className="flex gap-1">
                  <div className="h-1.5 flex-1 bg-secondary-fixed rounded-full shadow-sm shadow-secondary/50"></div>
                  <div className="h-1.5 flex-1 bg-secondary-fixed rounded-full shadow-sm shadow-secondary/50"></div>
                  <div className="h-1.5 flex-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </section>
          </aside>
        </div>
        
        {/* Contextual FAB */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </main>
    </div>
  )
}

export default Community
