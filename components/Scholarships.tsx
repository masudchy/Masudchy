
import React from 'react';
import { ExternalLink, Calendar, Globe, MapPin, Search } from 'lucide-react';

const Scholarships: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* External Resources */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Scholarships & Resources</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Essential links for funding your research journey and finding international opportunities in the humanities.
          </p>
          <div className="space-y-3">
            {[
              { name: 'NSF Humanities Funding', url: '#' },
              { name: 'DAAD Research Grants', url: '#' },
              { name: 'Fulbright Scholars Program', url: '#' },
              { name: 'Erasmus+ Mobility', url: '#' },
              { name: 'Getty Foundation Fellowships', url: '#' }
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-blue-200 transition-all group"
              >
                <span className="text-sm font-bold text-slate-700 group-hover:text-blue-900">{link.name}</span>
                <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-900" />
              </a>
            ))}
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-3xl">
            <h3 className="font-bold mb-2">Need advice?</h3>
            <p className="text-xs text-slate-400 mb-4">I offer regular office hours to discuss grant writing and application strategies for current students.</p>
            <button className="text-xs font-bold text-blue-300 hover:text-white uppercase tracking-widest flex items-center space-x-2">
              <span>View Office Hours</span>
              <Calendar size={14} />
            </button>
          </div>
        </div>

        {/* Conference Log */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Conference Log</h2>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 rounded-lg">
              <Search size={14} className="text-slate-400" />
              <input type="text" placeholder="Search events..." className="bg-transparent border-none outline-none text-xs text-slate-600 w-32" />
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { date: 'Oct 2024', event: 'Global Digital Humanities Summit', location: 'Tokyo, Japan', status: 'Keynote Speaker' },
              { date: 'Aug 2024', event: 'ACL Annual Conference', location: 'Bangkok, Thailand', status: 'Presenter' },
              { date: 'Jun 2024', event: 'Medieval Syntax Workshop', location: 'Oxford, UK', status: 'Chair' },
              { date: 'Mar 2024', event: 'AI Ethics Colloquium', location: 'Berlin, Germany', status: 'Panelist' }
            ].map((conf, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center p-6 bg-white border border-slate-100 rounded-2xl group hover:shadow-md transition-all">
                <div className="sm:w-32 mb-4 sm:mb-0">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-widest">{conf.date}</div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800 text-lg mb-1">{conf.event}</h4>
                  <div className="flex items-center space-x-4 text-slate-500 text-sm">
                    <span className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{conf.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Globe size={14} />
                      <span className="text-blue-700 font-medium">{conf.status}</span>
                    </span>
                  </div>
                </div>
                <button className="mt-4 sm:mt-0 px-4 py-2 border border-slate-100 rounded-lg text-xs font-bold text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all uppercase">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
