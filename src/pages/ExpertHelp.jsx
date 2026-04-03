import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const ExpertHelp = () => {
  const experts = [
    { name: "SEO Optimization", price: "Starting at $199", icon: "search", description: "Audit and optimize your site for Google search results." },
    { name: "Copywriting Overhaul", price: "Starting at $99", icon: "edit_note", description: "Professional headlines and descriptions for your site." },
    { name: "Technical Speed Audit", price: "Starting at $149", icon: "speed", description: "Improve your page load times and technical SEO metrics." },
    { name: "Ad Campaign Setup", price: "Starting at $299", icon: "ads_click", description: "Get your Google or Meta ads up and running professionally." },
    { name: "Social Media Strategy", price: "Starting at $199", icon: "share", description: "Build a brand identity and a posting schedule that works." },
  ];

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-grow min-h-screen">
        <Header />
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-headline text-on-surface leading-tight tracking-tight">Hire an Expert</h2>
            <p className="text-lg text-slate-500 max-w-lg mt-2">Scale your business with professional done-for-you growth services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="bg-surface-container-lowest p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-violet-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">{expert.icon}</span>
                </div>
                <div className="text-center md:text-left flex-grow">
                  <h3 className="text-2xl font-bold font-headline text-on-surface mb-2">{expert.name}</h3>
                  <p className="text-slate-500 mb-4">{expert.description}</p>
                  <p className="text-primary font-bold text-lg">{expert.price}</p>
                </div>
                <button className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                  Hire expert
                </button>
              </div>
            ))}
          </div>

          <section className="bg-violet-700 p-12 rounded-3xl text-white flex flex-col items-center text-center space-y-6 shadow-2xl shadow-primary/40">
            <h2 className="text-4xl font-headline font-extrabold max-w-2xl leading-tight">Need a custom strategy session?</h2>
            <p className="text-violet-100 text-lg max-w-xl">Book a 30-minute growth strategy session with the UENI marketing team to map out your next 90 days.</p>
            <button className="px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-violet-50 transition-colors shadow-xl">
              Book a session - $49
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ExpertHelp
