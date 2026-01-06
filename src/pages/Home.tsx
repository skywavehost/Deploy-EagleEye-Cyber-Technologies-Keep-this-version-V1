import React from 'react';
import ScannerAnimation from '../components/ScannerAnimation';
import { ChevronRight, Lock, Cpu, Activity, ShieldCheck, ArrowRight, Zap, Network, Cloud, Shield } from 'lucide-react';

const Home: React.FC<{ onNavigate: (page: string) => void, theme: 'light' | 'dark' }> = ({ onNavigate, theme }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#050505] px-6">
        {/* Background Network Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Network Grid"
            className="w-full h-full object-cover opacity-5 dark:opacity-20 scale-105"
          />
          {/* Overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#050505] via-white/80 dark:via-transparent to-white dark:to-[#050505] opacity-95 dark:opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#050505] via-transparent to-white dark:to-[#050505] opacity-80 dark:opacity-60" />
        </div>

        {/* Scanning Animation Layer */}
        <ScannerAnimation theme={theme} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-64 flex-grow flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00adef]/10 border border-[#00adef]/40 text-[#00adef] text-xs font-black uppercase tracking-widest mb-8 animate-pulse shadow-[0_0_15px_rgba(0,173,239,0.1)] mx-auto">
             <div className="w-1.5 h-1.5 rounded-full bg-[#00adef] animate-ping"></div>
             Mission-Critical Resilience
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight mb-8 tracking-tighter uppercase">
            Securing your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white via-[#00adef] to-[#00adef] drop-shadow-[0_0_20px_rgba(0,173,239,0.2)] dark:drop-shadow-[0_0_30px_rgba(0,173,239,0.3)] transition-all duration-300">
              Digital Assets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-poppins font-light leading-relaxed">
            EagleEye Cyber Technologies provides sovereign-grade protection for government, 
            enterprise, and regulated global industries. Zero Trust. Zero Compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-5 bg-[#00adef] text-white dark:text-black font-black uppercase text-sm tracking-widest rounded-sm transform transition hover:scale-105 hover:bg-[#33beff] active:scale-95 shadow-[0_15px_30px_rgba(0,173,239,0.2)] dark:shadow-[0_0_30px_rgba(0,173,239,0.4)]"
            >
              Request Threat Assessment
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-10 py-5 border border-[#00adef]/50 dark:border-[#00adef]/30 text-black dark:text-white font-bold uppercase text-sm tracking-widest rounded-sm hover:bg-[#00adef]/5 dark:hover:bg-[#00adef]/10 transition backdrop-blur-sm"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Metrics Bar - Updated with Blue Horizontal Borders */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 border-y-2 border-[#00adef]">
            {[
              { label: 'Uptime Reliability', value: '99.99%' },
              { label: 'Threats Blocked Monthly', value: '25K+' },
              { label: 'Incident Response Time', value: '< 15m' },
              { label: 'Compliance Grade', value: 'FISMA High' }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <p className="text-[10px] font-black text-[#00adef] uppercase tracking-widest">{metric.label}</p>
                <p className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tighter">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01-CAPABILITIES SECTION - Elevated Background */}
      <section className="py-32 bg-gray-50 dark:bg-[#080809] px-6 border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00adef 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-16 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
            <span>[ 01 // SRC_INTEL ]</span>
            <div className="h-px flex-grow bg-gray-200 dark:bg-white/5"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.3em] mb-4">01-CAPABILITIES</p>
              <h2 className="text-5xl md:text-6xl font-black text-black dark:text-white leading-tight tracking-tighter uppercase">
                <span className="bg-[#00adef] px-3 py-1 inline-block text-white dark:text-black">Full-Spectrum</span><br />Cybersecurity Operations
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2 group hover:text-[#00adef] transition-all mb-4"
            >
              View all capabilities <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Cybersecurity Advisory', icon: Shield, desc: 'Elite strategic guidance for C-suite and government leadership to navigate complex threat landscapes.' },
              { title: 'Network Hardening', icon: Network, desc: 'Securing the perimeter and internal fabrics against sophisticated persistent threats (APTs) and lateral movement.' },
              { title: 'Cloud Ecosystems', icon: Cloud, desc: 'Hardening AWS, Azure, and Google Cloud environments with sovereign-grade data sovereignty controls.' }
            ].map((cap, i) => (
              <div key={i} className="p-10 bg-white dark:bg-[#0a0a0b] border-2 border-[#00adef]/30 hover:border-[#00adef] transition-all duration-500 group relative overflow-hidden rounded-sm shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-5 group-hover:opacity-[0.1] dark:group-hover:opacity-15 transition-opacity">
                  <cap.icon size={80} />
                </div>
                <div className="w-12 h-12 bg-[#00adef]/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-[#00adef] transition-colors duration-500">
                  <cap.icon className="text-[#00adef] group-hover:text-white dark:group-hover:text-black transition-colors" size={24} />
                </div>
                <h3 className="text-2xl font-black text-black dark:text-white mb-6 leading-tight uppercase tracking-wide group-hover:text-[#00adef] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light">
                  {cap.desc}
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-[#00adef] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02-ETHOS SECTION - Base Background */}
      <section className="py-40 bg-white dark:bg-[#050505] px-6 overflow-hidden relative transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00adef 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-20 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
            <span>[ 02 // SYSTEM_ETHOS ]</span>
            <div className="h-px flex-grow bg-gray-100 dark:bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content Column */}
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.5em] flex items-center gap-2">
                  <span className="text-[#00adef]">#</span> 02-ETHOS
                </p>
                <h2 className="text-5xl md:text-6xl font-black text-black dark:text-white leading-tight tracking-tighter uppercase">
                  <span className="bg-[#00adef] px-3 py-1 inline-block text-white dark:text-black">Never Trust.</span><br />Always Verify.
                </h2>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed max-w-xl font-light">
                We implement <span className="text-black dark:text-white font-bold">Zero Trust Architectures</span> that treat every data node as a potential threat vector, 
                enforcing granular validation at every layer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: Lock, title: 'Immutable Security', desc: 'Hardened baselines that resist environmental tampering.' },
                  { icon: Activity, title: 'Real-time Telemetry', desc: 'Comprehensive visibility across global distributed stacks.' },
                  { icon: Cpu, title: 'Post-Quantum Defense', desc: 'Proactive encryption ready for next-gen computation.' },
                  { icon: ShieldCheck, title: 'Automated Response', desc: 'Algorithmic containment and adaptive mitigation.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-4 p-6 bg-white dark:bg-[#0a0a0b] border-2 border-[#00adef]/30 rounded-sm transition-all duration-300 hover:border-[#00adef] hover:scale-[1.02] group shadow-sm">
                    <div className="flex items-center gap-3">
                      <item.icon className="text-gray-400 dark:text-gray-500 group-hover:text-[#00adef] transition-colors" size={20} strokeWidth={1.5} />
                      <h4 className="text-sm font-black text-black dark:text-white uppercase tracking-wider">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Column - Square Image Ratio */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden border-4 border-[#00adef]/40 shadow-2xl">
                <img 
                  src="https://skywavehost.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-23-2025-08_27_09-AM.jpg" 
                  alt="Security Engineering Operations" 
                  className="w-full aspect-square object-cover transition-opacity duration-300" 
                />
              </div>
              {/* Corner tech accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#00adef]"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#00adef]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Elevated Background */}
      <section className="py-40 bg-gray-50 dark:bg-[#080809] px-6 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00adef 1px, transparent 1px), linear-gradient(90deg, #00adef 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-20 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
            <span>[ 03 // ENGAGE_NODE ]</span>
            <div className="h-px flex-grow bg-gray-200 dark:bg-white/5"></div>
          </div>

          <div className="bg-[#00adef] dark:bg-[#00adef] p-16 md:p-24 rounded-sm text-center relative overflow-hidden group shadow-[0_0_80px_-10px_rgba(0,173,239,0.7)] dark:shadow-[0_0_100px_-20px_rgba(0,173,239,0.8)] border-4 border-white/40">
            {/* Tech-grid background pattern - White on Blue */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
                 style={{ 
                   backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', 
                   backgroundSize: '25px 25px' 
                 }}>
            </div>
            
            {/* Internal animated glow pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/20 transition-all duration-1000 animate-pulse"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white dark:text-black uppercase tracking-tighter drop-shadow-lg leading-tight">
                Ready to Harden Your <br />
                <span className="bg-black/10 px-4 py-1 inline-block">Environment?</span>
              </h2>
              <p className="text-white dark:text-black text-xl max-w-2xl mx-auto font-bold leading-relaxed opacity-90">
                Contact our engineering team today to schedule a comprehensive security assessment 
                and discover the EagleEye advantage.
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 font-black uppercase text-sm tracking-[0.3em] rounded-sm hover:scale-110 active:scale-95 transition-all flex items-center gap-4 mx-auto shadow-2xl group/btn border-2 border-white/20"
                >
                  Speak with a Consultant 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Decorative tech corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;