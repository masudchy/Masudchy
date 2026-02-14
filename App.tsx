
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink, Calendar, ChevronRight, Book, GraduationCap, Users, Info, Bell, MessageSquare, Award } from 'lucide-react';
import { PERSONAL_INFO, METRICS, PUBLICATIONS, PROJECTS, NOTICES, COURSES } from './constants';
import { TabID, Publication, Project, Notice } from './types';

// Components
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Students from './components/Students';
import Scholarships from './components/Scholarships';
import NoticeBoard from './components/NoticeBoard';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabID>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: TabID; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Info },
    { id: 'about', label: 'About', icon: GraduationCap },
    { id: 'research', label: 'Research', icon: Book },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'scholarships', label: 'Conferences', icon: Award },
    { id: 'notice', label: 'Notices', icon: Bell },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'research': return <Research />;
      case 'students': return <Students />;
      case 'scholarships': return <Scholarships />;
      case 'notice': return <NoticeBoard />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  const handleTabChange = (tab: TabID) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-blue-900`}>S</div>
            <span className={`font-serif text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
              Dr. Sterling
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabChange(link.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${activeTab === link.id ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-600'}`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href={PERSONAL_INFO.cvLink}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              <Download size={16} />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-blue-900" /> : <Menu className="text-blue-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleTabChange(link.id)}
              className={`flex items-center space-x-4 p-4 rounded-xl text-lg font-medium ${activeTab === link.id ? 'bg-blue-50 text-blue-900' : 'text-slate-600'}`}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </button>
          ))}
          <button className="flex items-center justify-center space-x-2 w-full p-4 bg-blue-900 text-white rounded-xl mt-4">
            <Download size={20} />
            <span>Download Full CV</span>
          </button>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {PERSONAL_INFO.institution}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Quick Links</h4>
            <button onClick={() => handleTabChange('research')} className="hover:text-white transition-colors text-sm">Research Philosophy</button>
            <button onClick={() => handleTabChange('notice')} className="hover:text-white transition-colors text-sm">Recent Notices</button>
            <button onClick={() => handleTabChange('students')} className="hover:text-white transition-colors text-sm">Students Corner</button>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white"><Github size={20} /></a>
              <a href="mailto:alexander.sterling@ox.ac.uk" className="hover:text-white"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Professional Portfolio Template.
        </div>
      </footer>
    </div>
  );
};

export default App;
