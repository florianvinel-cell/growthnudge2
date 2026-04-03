import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl flex justify-between items-center w-full px-8 py-4 shadow-[0px_12px_32px_rgba(83,0,185,0.06)]">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 w-64 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm" placeholder="Search nudges..." type="text"/>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 bg-violet-50 px-3 py-1.5 rounded-full">
          <span className="material-symbols-outlined text-violet-700 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">Pro Member</span>
        </div>
        <button className="relative text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error border-2 border-white"></span>
        </button>
        <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface leading-none">Alex Rivers</p>
            <p className="text-[10px] text-slate-500 font-label">Founder, Rivers Edge</p>
          </div>
          <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr4SmpArscOhBBywDMgSeabXYq8iUx8jgq0RxnDwJ5QVj_1t3KQ9woBDpztQGAftA1jJW_1oOZ5d8AThf-BxdUtIjoEqccMDjq8TvLq7Eeo_h_sp95LRR5BS5jJk303LXexJ8MZ1OQuJ0AAphIRpMMV3n-jH7xoOuIpczvzRGAd5FJKJxjqzQ6TNO27f6LsQ6parR1QQJP1LUL77-6gtW7DutkqfRTYvCmoLL-W4UurHedeMgyZh-O4Zp2qqHjC1ESSwXV7BnshZQO"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
