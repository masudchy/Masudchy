
import React from 'react';
import { Book, FileText, Send, UserPlus, Download } from 'lucide-react';
import { COURSES } from '../constants';

const Students: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Students Corner</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Resources for current students and information for prospective researchers wishing to join the laboratory.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Courses & Materials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center space-x-3 mb-6">
              <Book className="text-blue-900" />
              <span>Current Courses</span>
            </h3>
            <div className="space-y-4">
              {COURSES.map(course => (
                <div key={course.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-900 group-hover:text-white transition-all">
                      <span className="text-xs font-bold">{course.id}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{course.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{course.semester}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-blue-900">
                    <FileText size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Course Materials</h3>
            <p className="text-sm text-blue-700 mb-6">Access lecture slides, reading lists, and coding assignments from the secure repository.</p>
            <button className="w-full py-3 bg-blue-900 text-white rounded-xl font-bold text-sm flex items-center justify-center space-x-2 hover:bg-blue-800 transition-colors">
              <Download size={18} />
              <span>Enter Materials Repository</span>
            </button>
          </div>
        </div>

        {/* Right Column: Opportunities Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
              <UserPlus size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Research Opportunities</h3>
          </div>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Interested in digital humanities, NLP, or philology? My lab is always looking for motivated undergraduate and graduate research assistants. Fill out the form below to express your interest.
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase">Year/Level</label>
              <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none text-slate-500">
                <option>Undergraduate</option>
                <option>Master's</option>
                <option>PhD Candidate</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase">Research Interests</label>
              <textarea rows={4} placeholder="Briefly describe your interests and relevant skills..." className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
              <span>Submit Interest</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Students;
