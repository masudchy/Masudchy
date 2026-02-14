
import React, { useState } from 'react';
import { Search, Filter, ExternalLink, BookOpen, Quote, Clock, CheckCircle2, FileEdit } from 'lucide-react';
import { PUBLICATIONS, PROJECTS } from '../constants';

const Research: React.FC = () => {
  const [pubFilter, setPubFilter] = useState<'all' | 'journal' | 'conference' | 'book'>('all');
  const [projectFilter, setProjectFilter] = useState<'all' | 'ongoing' | 'finished'>('all');

  const filteredPubs = pubFilter === 'all' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.category === pubFilter);

  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : projectFilter === 'ongoing' 
      ? PROJECTS.filter(p => p.status !== 'finished') 
      : PROJECTS.filter(p => p.status === 'finished');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Research & Publications</h2>
        <div className="p-8 bg-blue-900 text-white rounded-3xl shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <Quote className="text-blue-300" fill="currentColor" size={32} />
            <h3 className="text-xl font-serif">Research Philosophy</h3>
          </div>
          <p className="text-blue-50 text-lg italic leading-relaxed">
            "My work operates at the intersection of data science and classical studies. I believe that by applying rigorous computational models to historical texts, we don't just 'process' data—we rediscover voices that have been silenced by time. My goal is to create ethical AI systems that understand the nuance of human language across centuries."
          </p>
        </div>
      </div>

      {/* Publications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center space-x-3">
              <BookOpen className="text-blue-900" />
              <span>Selected Publications</span>
            </h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {(['all', 'journal', 'conference', 'book'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setPubFilter(f)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${pubFilter === f ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredPubs.map(pub => (
              <div key={pub.id} className="p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <div className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">
                    {pub.category}
                  </div>
                  <span className="text-slate-400 font-bold text-sm">{pub.year}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors">{pub.title}</h4>
                <p className="text-slate-500 text-sm mb-4">{pub.authors} — <span className="italic">{pub.journal}</span></p>
                <div className="flex items-center space-x-4">
                  {pub.doi && (
                    <a href="#" className="text-blue-700 text-xs font-bold flex items-center space-x-1 hover:underline">
                      <ExternalLink size={12} />
                      <span>View Citation</span>
                    </a>
                  )}
                  <a href="#" className="text-slate-500 text-xs font-bold flex items-center space-x-1 hover:text-slate-700">
                    <BookOpen size={12} />
                    <span>Publisher Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Sidebar */}
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-slate-800">Projects</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {(['all', 'ongoing', 'finished'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setProjectFilter(f)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase transition-all ${projectFilter === f ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredProjects.map(project => (
              <div key={project.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm relative overflow-hidden group">
                <div className="flex items-center space-x-3 mb-3">
                  {project.status === 'active' && <div className="p-1.5 bg-green-50 text-green-600 rounded-lg"><Clock size={16} /></div>}
                  {project.status === 'in-review' && <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg"><FileEdit size={16} /></div>}
                  {project.status === 'finished' && <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg"><CheckCircle2 size={16} /></div>}
                  
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    project.status === 'active' ? 'bg-green-100 text-green-700' : 
                    project.status === 'in-review' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">[{project.type}]</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors">{project.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-50">
                   <button className="text-[10px] font-bold text-blue-800 uppercase hover:underline">Learn More &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
