
import React from 'react';
import { Bell, AlertCircle, Clock, CalendarCheck } from 'lucide-react';
import { NOTICES } from '../constants';

const NoticeBoard: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Notice Board</h2>
          <p className="text-slate-600">Stay updated with deadlines, seminar alerts, and administrative notices.</p>
        </div>
        <div className="hidden sm:flex h-12 w-12 bg-blue-50 text-blue-900 rounded-full items-center justify-center animate-pulse">
          <Bell size={24} />
        </div>
      </div>

      <div className="space-y-4">
        {NOTICES.map((notice) => (
          <div key={notice.id} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm flex flex-col sm:flex-row gap-6 hover:border-blue-200 transition-all">
            <div className="sm:w-40 flex-shrink-0 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
              <div className="flex items-center space-x-2 text-blue-900 font-bold mb-1">
                <CalendarCheck size={16} />
                <span className="text-sm">{new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                notice.category === 'deadline' ? 'bg-red-50 text-red-600' :
                notice.category === 'submission' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
              }`}>
                {notice.category}
              </span>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  {notice.category === 'deadline' ? <AlertCircle className="text-red-500" size={20} /> : <Clock className="text-blue-500" size={20} />}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{notice.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{notice.content}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end sm:justify-center">
              <button className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-900">Mark as Read</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl text-center">
        <p className="text-sm text-slate-500 mb-4">Are you a student representative looking to post an announcement?</p>
        <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
          Request Posting Permissions
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
