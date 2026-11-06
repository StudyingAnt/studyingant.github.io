import type { Language } from './languages';

// Add only facts and destinations supplied by the owner. Empty entries stay hidden.
export const profile: {
  name: string;
  koreanName: string;
  email: string;
  orcid: string;
  career: { period: string; degree: 'phd' | 'masters' | 'bachelors'; institution: string }[];
  worldbuildingSite: { url: string; title: string };
} = {
  name: 'Joon-Hyun Song',
  koreanName: '송준현',
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

// Published works only, from the owner's CV. No preliminary-report file or results.
export const publications = [
  {
    title: 'Evolvability of cancer-associated genes under APOBEC3A/B selection',
    venue: 'iScience', year: 2024, doi: '10.1016/j.isci.2024.109433',
  },
  {
    title: 'Distinct immune tones are established by Lactococcus lactis BFE920 and Lactobacillus plantarum FGL0001 in the gut of olive flounder',
    venue: 'Fish & Shellfish Immunology', year: 2016, doi: '10.1016/j.fsi.2016.06.022',
  },
];
