import React, { useState, useRef } from 'react';
import { Shield, Upload, Send, CheckCircle2, AlertCircle, FileText, Image as ImageIcon, X } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'govt',
    briefing: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const submissionData = new FormData();
    submissionData.append('Name', formData.name);
    submissionData.append('Email', formData.email);
    submissionData.append('Organization', formData.organization);
    submissionData.append('Industry', formData.industry);
    submissionData.append('Message', formData.briefing);
    
    files.forEach((file, index) => {
      submissionData.append(`attachment_${index}`, file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="pt-40 pb-32 px-6 min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center transition-colors">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={48} className="text-[#00adef] mx-auto" />
          <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tighter">Transmission Successful</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Your security audit request has been received. Our operations center will reach out within 24 hours.</p>
          <button onClick={() => setFormState('idle')} className="text-[#00adef] text-xs font-black uppercase border border-[#00adef]/20 px-8 py-3 hover:bg-[#00adef] hover:text-white dark:hover:text-black transition-all">Send Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.4em]">CONTACT OPERATIONS</p>
              <h1 className="text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                Initiate <br />
                <span className="text-gray-500">Security Audit.</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-xl">Ready to harden your critical infrastructure? Dispatch your environment parameters below.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-gray-50 dark:bg-[#0a0a0b] border border-gray-100 dark:border-white/5 rounded-sm">
                <div className="w-12 h-12 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm">
                  <Shield className="text-[#00adef]" size={24} />
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold uppercase text-xs tracking-widest mb-2">E2EE Data Handling</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">All submissions are encrypted at rest and in transit. diagrams are protected by military-grade protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-gray-50 dark:bg-[#0a0a0b] border border-gray-100 dark:border-white/5 rounded-sm">
                <div className="w-12 h-12 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm">
                  <AlertCircle className="text-[#00adef]" size={24} />
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold uppercase text-xs tracking-widest mb-2">Immediate Response</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Our Global Security Operations Center (GSOC) maintains a 24-hour SLA for all audit requests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-[#0a0a0b] border border-gray-100 dark:border-white/5 p-10 md:p-12 relative shadow-sm dark:shadow-2xl">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00adef 1px, transparent 1px), linear-gradient(90deg, #00adef 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {formState === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Transmission Failed. Please check your connection.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Operator Name</label>
                  <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white font-bold outline-none focus:border-[#00adef] transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Work Email</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white font-bold outline-none focus:border-[#00adef] transition-colors" placeholder="e.g. security@corp.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Briefing Summary</label>
                <textarea required name="briefing" value={formData.briefing} onChange={handleInputChange} rows={4} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white resize-none font-medium outline-none focus:border-[#00adef] transition-colors" placeholder="Describe your security challenges..." />
              </div>
              <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-200 dark:border-white/10 p-10 text-center cursor-pointer hover:border-[#00adef] transition-colors group">
                <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/*,.pdf" />
                <Upload className="mx-auto text-gray-400 group-hover:text-[#00adef] mb-2" size={32} />
                <span className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase">{files.length > 0 ? `${files.length} files selected` : 'Upload System Assets'}</span>
              </div>
              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-black dark:bg-white text-white dark:text-black py-5 font-black uppercase text-sm shadow-xl hover:bg-[#00adef] dark:hover:bg-[#00adef] transition-all">
                {formState === 'submitting' ? 'Transmitting...' : 'Submit Transmission'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;