
export type TabID = 'home' | 'about' | 'research' | 'students' | 'scholarships' | 'notice' | 'contact';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  category: 'journal' | 'conference' | 'book';
}

export interface Project {
  id: string;
  title: string;
  status: 'active' | 'in-review' | 'finished';
  type: 'writing' | 'research';
  description: string;
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  category: 'deadline' | 'submission' | 'attendance';
  content: string;
}

export interface Metric {
  label: string;
  value: string;
}
