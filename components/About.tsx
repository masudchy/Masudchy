
import React, { useState } from 'react';
/* Added Users to the lucide-react imports */
import { GraduationCap, Award, Briefcase, Star, MapPin, Calendar, Users } from 'lucide-react';

const About: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'edu' | 'part' | 'achieve'>('edu');

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Background</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A summary of my academic journey, professional involvement, and recognition in the field of Linguistics and AI.
        </p>
      </div>

      {/* Nested Tabs */}
      <div className="flex justify-center mb-12 border-b border-slate-200">
        <div className="flex space-x-8">
          <button 
            onClick={() => setActiveSubTab('edu')}
            className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-all relative ${activeSubTab === 'edu' ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Education
            {activeSubTab === 'edu' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"></div>}
          </button>
          <button 
            onClick={() => setActiveSubTab('part')}
            className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-all relative ${activeSubTab === 'part' ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Participations
            {activeSubTab === 'part' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"></div>}
          </button>
          <button 
            onClick={() => setActiveSubTab('achieve')}
            className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-all relative ${activeSubTab === 'achieve' ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Achievements
            {activeSubTab === 'achieve' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"></div>}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 min-h-[400px]">
        {activeSubTab === 'edu' && (
          <div className="space-y-10">
            {[
              { year: '2008 - 2012', degree: 'Ph.D. in Computational Linguistics', school: 'University of Cambridge', desc: 'Thesis: "Statistical Models of Morphological Change in Indo-European Languages."' },
              { year: '2006 - 2008', degree: 'M.Phil. in Theoretical Linguistics', school: 'Oxford University', desc: 'Distinction honors in Semantic Modeling.' },
              { year: '2002 - 2006', degree: 'B.A. in Classical Philology', school: 'University of Athens', desc: 'Summa Cum Laude.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 group">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-blue-900 font-bold text-sm tracking-tighter">{item.year}</span>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-100 group-last:border-transparent">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-900"></div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{item.degree}</h4>
                  <p className="text-blue-700 font-medium mb-2">{item.school}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'part' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Editor-in-Chief', org: 'AI & Humanities Review', icon: Briefcase },
              { title: 'Board Member', org: 'International Linguistics Society', icon: Users },
              { title: 'Visiting Researcher', org: 'MIT CSAIL', icon: MapPin },
              { title: 'Consultant', org: 'UNESCO Cultural Heritage AI Project', icon: Star }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 transition-colors">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-900 shadow-sm">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'achieve' && (
          <div className="space-y-4">
            {[
              { year: '2024', title: 'National Science Foundation Grant (Humanities)', desc: 'Received $500k for research on digital preservation of endangered languages.' },
              { year: '2022', title: 'Best Teacher Award', desc: 'Voted top professor by the University Student Council for innovative pedagogy.' },
              { year: '2020', title: 'Outstanding Publication Award', desc: 'Recognized for the book "Foundations of Modern Philology" (Oxford Press).' }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="hidden sm:block text-2xl font-serif text-blue-200">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">{item.year}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
