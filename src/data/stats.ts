export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export const mockStats: StatItem[] = [
  { id: '1', value: '10k+', label: 'Online Courses', sublabel: 'Across all modern domains' },
  { id: '2', value: '50k+', label: 'Active Students', sublabel: 'Learning worldwide' },
  { id: '3', value: '120+', label: 'Expert Mentors', sublabel: 'Leading industry engineers' },
  { id: '4', value: '4.9★', label: 'Student Rating', sublabel: 'From 30k+ verified reviews' },
];

export const mockPartners = [
  { name: 'Google', symbol: 'Google' },
  { name: 'Microsoft', symbol: 'Microsoft' },
  { name: 'Spotify', symbol: 'Spotify' },
  { name: 'Amazon', symbol: 'Amazon' },
  { name: 'Slack', symbol: 'Slack' },
  { name: 'Figma', symbol: 'Figma' },
];
