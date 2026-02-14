
import React from 'react';
/* Added Users to the lucide-react imports */
import { ArrowRight, Download, GraduationCap, FileText, Activity, Users } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* News Ticker */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden whitespace-nowrap border-b border-blue-800">
        <div className="news-ticker-animation inline-block pl-[100%]">
          <span className="mx-8 font-medium">📢 New Paper Published in AI Ethics Journal</span>
          <span className="mx-8 font-medium">📅 Upcoming Guest Lecture: Harvard University (Sept 2024)</span>
          <span className="mx-8 font-medium">🏆 Recipient of the 2024 Global Excellence in Research Award</span>
          <span className="mx-8 font-medium">💻 Seeking PhD Students for Fall 2025</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Available for Collaborations</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Bridging the gap between <span className="text-blue-900">History & AI</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center space-x-2">
                <span>Research Philosophy</span>
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10 transform rotate-3"></div>
              <img 
                src={PERSONAL_INFO.profileImg} 
                alt={PERSONAL_INFO.name} 
                className="w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-[200px]">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white">
                  <Activity size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Current Role</div>
                  <div className="text-sm font-bold text-slate-800">Lead Investigator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1 group-hover:scale-110 transition-transform">{metric.value}</div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted sections preview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Academic Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Dedicated Teaching</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Mentoring students in advanced syntactic theories and digital humanities methodologies with a focus on practical application.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Rigorous Research</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Publishing in high-impact journals and contributing to the global body of knowledge in computational linguistics.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Student Growth</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Fostering an environment for students to collaborate on multi-disciplinary projects and publish original research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
