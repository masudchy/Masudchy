
import React from 'react';
import { Mail, MapPin, Linkedin, Globe, Send, Download, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Whether you're a prospective student, a fellow researcher, or an institution, I'm always open to discussing new opportunities and collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Side */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Email Address</div>
                  <div className="text-slate-800 font-bold">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Office Location</div>
                  <div className="text-slate-800 font-bold">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Professional Profiles</h3>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', url: PERSONAL_INFO.socials.linkedin },
                { icon: Github, label: 'GitHub', url: '#' },
                { icon: Globe, label: 'Scholar', url: PERSONAL_INFO.socials.scholar },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-900 hover:border-blue-200 shadow-sm transition-all"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-3xl text-white">
            <h4 className="text-xl font-bold mb-4">Download Academic CV</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">My complete curriculum vitae includes full publication history, conference participations, and departmental services.</p>
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Enter email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Collaboration / Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
              <textarea rows={6} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none resize-none" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
