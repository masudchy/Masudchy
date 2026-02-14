
import React from 'react';
import { BookOpen, Users, Briefcase, GraduationCap, Award, MapPin, Mail, Globe, Linkedin, Github } from 'lucide-react';
import { Publication, Project, Notice, Metric } from './types';

export const PERSONAL_INFO = {
  name: "Dr. Alexander Sterling",
  title: "Professor of Computational Linguistics",
  institution: "Oxford University, Department of Humanities",
  bio: "Highly accomplished researcher with over 15 years of experience in natural language processing and its applications in historical linguistics. Dedicated educator mentoring the next generation of data-driven humanists.",
  email: "alexander.sterling@ox.ac.uk",
  location: "Oxford, United Kingdom",
  profileImg: "https://picsum.photos/seed/prof1/400/500",
  cvLink: "#",
  socials: {
    linkedin: "#",
    scholar: "#",
    researchgate: "#"
  }
};

export const METRICS: Metric[] = [
  { label: "Years Teaching", value: "15+" },
  { label: "Publications", value: "48" },
  { label: "Active Projects", value: "6" },
  { label: "Graduate Students", value: "12" }
];

export const PUBLICATIONS: Publication[] = [
  { id: '1', title: 'Deep Learning for Ancient Text Restoration', authors: 'Sterling, A., et al.', journal: 'Journal of Computational Humanities', year: 2023, category: 'journal', doi: '10.1234/jch.2023.01' },
  { id: '2', title: 'Mapping the Indo-European Dialect Continuum', authors: 'Sterling, A.', journal: 'Linguistics Research Quarterly', year: 2022, category: 'journal' },
  { id: '3', title: 'Automated Syntax Analysis in Medieval Manuscripts', authors: 'Sterling, A., Doe, J.', journal: 'Global AI Conference', year: 2024, category: 'conference' },
  { id: '4', title: 'Foundations of Modern Philology', authors: 'Sterling, A.', journal: 'Oxford University Press', year: 2021, category: 'book' }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Project Rosetta 2.0', status: 'active', type: 'research', description: 'Reconstructing fragmentary inscriptions using transformer models.' },
  { id: '2', title: 'The Ethos of Translation', status: 'in-review', type: 'writing', description: 'Monograph exploring the philosophical implications of machine translation.' },
  { id: '3', title: 'Syntax Map of Central Europe', status: 'finished', type: 'research', description: 'A comprehensive database of 14th-century grammatical structures.' }
];

export const NOTICES: Notice[] = [
  { id: '1', date: '2024-06-15', title: 'Abstract Submission Deadline', category: 'deadline', content: 'Final date for submissions to the Annual Humanities Summit.' },
  { id: '2', date: '2024-06-20', title: 'Seminar Attendance Sheet', category: 'attendance', content: 'Updated attendance sheet for CL-402 is now available on the Student Portal.' },
  { id: '3', date: '2024-07-01', title: 'Project Proposal Alerts', category: 'submission', content: 'Grad students must submit their initial proposals by July 1st.' }
];

export const COURSES = [
  { id: 'CL101', title: 'Introduction to Computational Linguistics', semester: 'Fall 2024' },
  { id: 'CL402', title: 'Advanced Syntactic Theory', semester: 'Spring 2024' },
  { id: 'CL500', title: 'Research Methodologies in Digital Humanities', semester: 'Ongoing' }
];
