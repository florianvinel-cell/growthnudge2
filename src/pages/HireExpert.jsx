import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const HireExpert = () => {
  return (
    <div className="flex bg-surface min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen bg-surface">
        <Header />
        
        <div className="max-w-7xl mx-auto p-12 space-y-12">
          {/* Hero Section & Service Intro */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-secondary-container/30 text-secondary rounded-full text-xs font-bold tracking-tight">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                GROWTH ACCELERATOR
              </div>
              <h1 className="text-6xl font-extrabold font-headline leading-[1.1] text-on-background tracking-tighter">Fix My SEO</h1>
              <p className="text-2xl text-on-surface-variant font-medium max-w-xl leading-relaxed">
                Boost your search visibility and drive organic traffic with a comprehensive optimization overhaul.
              </p>
              {/* Expert Bio Card */}
              <div className="p-8 bg-surface-container-lowest rounded-[24px] shadow-[0px_12px_32px_rgba(83,0,185,0.04)] flex gap-6 items-center group transition-all hover:-translate-y-1">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-md">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrkJ9Iq1z1A5FHLNFotjR07gM0ByEZFu4l09jePcBrMKrfR-MiY8rgN7uTiJY_juLxwCa3N5ncJiUcaivMYsOL_V3VBL6GAqeunnK9_sJQV8dvoepBtXcvJo6bYdgas-MP8hnGKtFy1pveSWadmY6ftu8LtzRgZxH9GjZLD0PpNbLAKuBiomGpkNrtTh6UyVBkfFlXfsUd0u7FWIqqt7fwUmq6fuLyQ94kXq8awi_k6KQHWDX3Z-GZ-2woOlOEmfx0Szz4S5H2g3c" alt="Sarah Jenkins" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1.5 rounded-lg shadow-lg">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold font-headline">Sarah Jenkins</h3>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Top Rated</span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-2">Growth Strategist • 12+ Years Exp.</p>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">"I specialize in turning invisible brands into search engine powerhouses through data-driven technical fixes and content strategy."</p>
                </div>
              </div>
            </div>
            {/* High-Impact Image Bento */}
            <div className="lg:col-span-5 h-full min-h-[400px]">
              <div className="w-full h-full rounded-[32px] overflow-hidden relative group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZQZbj7ouM7kzfiyszIOLkrzbE0ZEPrJEIs14t5SHkQmlryT0Y-AObshcGBu7huS9UUznpXRkkrd8Hif2sFxS9bcwTUb_A2wzMFZBF9mAhnAg1fdsK_Di3sAmyHEgh1_SZ_jBbdhvOFu1qlWVQ8I1qE-pvYg9fZPBp3Pa4MQRQBDhG4cj6Csy0zL-yrhD5yuV7qFtaXbELT9swkSHXN76vFEfoW0PI7UsWK-6HXLN9T6i_KkrWXjwVaG-W1D6x_H_yMFdnw_ghKrHo" alt="SEO Performance" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Avg. Client Lift</p>
                      <p className="text-4xl font-extrabold font-headline">+142%</p>
                    </div>
                    <span className="material-symbols-outlined text-4xl">bar_chart</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Details & Checkout Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            {/* What's Included */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold font-headline mb-8 flex items-center gap-3">
                  What's Included
                  <div className="h-1 w-24 bg-primary/10 rounded-full">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {title: 'Comprehensive Keyword Audit', desc: 'Discovery of high-intent keywords your competitors are missing.'},
                    {title: 'Technical SEO Fixes', desc: 'Resolving crawl errors, broken links, and site speed bottlenecks.'},
                    {title: '1-on-1 Strategy Session', desc: 'A 60-minute deep dive into your specific growth obstacles.'},
                    {title: '3-Month Roadmap', desc: 'Step-by-step instructions for sustained ranking improvements.'},
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-surface-container-low rounded-2xl flex items-start gap-4 transition-colors hover:bg-white group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface mb-1">{item.title}</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Trust Indicators */}
              <div className="p-8 border-2 border-dashed border-zinc-200 rounded-[24px] flex flex-wrap gap-12 items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="text-xl font-bold font-headline text-zinc-400">TRUSTED BY</span>
                {['NEXUS', 'VELOCITY', 'ELEVATE'].map(brand => (
                  <div key={brand} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                    <span className="font-bold">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Checkout Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-10 bg-surface-container-lowest rounded-[32px] shadow-[0px_32px_64px_rgba(83,0,185,0.08)] space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Investment</h3>
                    <p className="text-5xl font-extrabold font-headline text-on-background">$249</p>
                    <p className="text-xs text-secondary font-bold mt-2">No hidden platform fees</p>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-2xl">
                    <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                  </div>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Service Fee</span>
                    <span className="font-bold">$249.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Delivery Time</span>
                    <span className="font-bold">3-5 Days</span>
                  </div>
                  <div className="pt-3 border-t border-zinc-200 flex justify-between">
                    <span className="font-bold">Total Due</span>
                    <span className="font-extrabold text-primary text-lg">$249.00</span>
                  </div>
                </div>
                <button className="w-full py-5 bg-secondary-fixed text-on-secondary-fixed font-extrabold text-lg rounded-2xl transition-all hover:brightness-105 active:scale-95 flex items-center justify-center gap-3">
                  Confirm & Book Session
                  <span className="material-symbols-outlined">bolt</span>
                </button>
                <p className="text-center text-[10px] text-zinc-400 px-4">
                  By clicking confirm, you agree to the GrowthNudge terms of service and Sarah's session cancellation policy.
                </p>
                <div className="pt-6 border-t border-zinc-100 flex items-center justify-center gap-6">
                  <div className="flex -space-x-3">
                    {['AB6AXuAOUtyHOqW7WQ83kbkKnw7c5HQNF5zd6DitjdvMnkiwqOR6GcSt50Dguwx69gzezcYNkjz0s0vU26wZm0IcnZCiBCsVFIS34Eha4KR48z85KqtRw3PvloeXEkhiLxQSGfRsGeexpwSUR3migYdnUw8J7uLh_4-7uX1yj4DqidwGb2P1-ASde09zgUHcFP_oiUL5l9snnijG8GgSlglfGgIJIeId1OGX91_7EwQL_B8huV4980PfnQUPl-EBONdPtL28fZS_jE-iPUch',
                      'AB6AXuBlCspb-JGanDXbnhr3X4TLC2SelLdOuPHKytSoN6HcZTFcDZ00nimIrNWKjiS6-YJ1QWvufuiBVE1Fn3V0YEB2bRq72KEb0P4Sehp7DV916-1YzsuYXW9QD2Vf3LHSRASsvDp_9WffYrj4aO1s-YVBS1osRWoT0G4LQJbggS8pVKWMRDkulyWcZ_OiYDup3rNLPkD4uGdAjQYbLwTE2TKN61KkN5ruy7-Uz_tBflc03oxyuB-WHnphjzWAnzAHmi4WKaLsEj8kIVk2'].map((id, i) => (
                      <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://lh3.googleusercontent.com/aida-public/${id}`} alt="user" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-500">+1.2k</div>
                  </div>
                  <span className="text-xs font-bold text-zinc-500">Booked this month</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default HireExpert
