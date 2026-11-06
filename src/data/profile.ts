import type { Language } from './languages';

// Add only facts and destinations supplied by the owner. Empty entries stay hidden.
export const profile: {
  name: string;
  koreanName: string;
  portrait: string;
  departmentUrl: string;
  trackUrl: string;
  email: string;
  orcid: string;
  career: { period: string; degree: 'phd' | 'masters' | 'bachelors'; institution: string }[];
  worldbuildingSite: { url: string; title: string };
} = {
  name: 'Joon-Hyun Song',
  koreanName: '송준현',
  portrait: '/images/joon-hyun-song.jpg',
  departmentUrl: 'https://www.stonybrook.edu/ams/',
  trackUrl: 'https://www.stonybrook.edu/ams/academics/graduate/computational-biology.html',
  email: 'joon-hyun.song@stonybrook.edu',
  orcid: '0000-0002-0085-4888',
  career: [
    { period: '2021–', degree: 'phd', institution: 'Stony Brook University' },
    { period: '2018–2020', degree: 'masters', institution: 'Handong Global University' },
    { period: '2012–2018', degree: 'bachelors', institution: 'Handong Global University' },
  ],
  worldbuildingSite: { url: 'https://www.khartllan.com/', title: 'Khartllan' },
};

export const displayName = (lang: Language) => lang === 'ko' ? profile.koreanName : profile.name;
