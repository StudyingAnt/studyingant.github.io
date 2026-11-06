export type Author = {
  name: string;
  owner?: boolean;
  coFirst?: boolean;
};

export type Work = {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  doi: string;
  url: string;
  ownerRole: 'first' | 'co-first' | 'coauthor';
  version?: number;
  evidence: string[];
};

// Published spellings and order are preserved, including the owner's unhyphenated
// name in the 2016 paper. No author lists are shortened to "et al.".
export const publications: Work[] = [
  {
    id: 'apobec-selection',
    title: 'Evolvability of cancer-associated genes under APOBEC3A/B selection',
    authors: [
      { name: 'Joon-Hyun Song', owner: true },
      { name: 'Liliana M. Dávalos' },
      { name: 'Thomas MacCarthy' },
      { name: 'Mehdi Damaghi' },
    ],
    venue: 'iScience', year: 2024, doi: '10.1016/j.isci.2024.109433',
    url: 'https://doi.org/10.1016/j.isci.2024.109433', ownerRole: 'first',
    evidence: ['https://europepmc.org/articles/PMC10972820'],
  },
  {
    id: 'immune-tones',
    title: 'Distinct immune tones are established by Lactococcus lactis BFE920 and Lactobacillus plantarum FGL0001 in the gut of olive flounder (Paralichthys olivaceus)',
    authors: [
      { name: 'Bo Ram Beck' },
      { name: 'Joon Hyun Song', owner: true },
      { name: 'Byung Sun Park' },
      { name: 'Daniel Kim' },
      { name: 'Jin-Hwan Kwak' },
      { name: 'Hyung Ki Do' },
      { name: 'Ah-Ram Kim' },
      { name: 'Woo-Jin Kim' },
      { name: 'Seong Kyu Song' },
    ],
    venue: 'Fish & Shellfish Immunology', year: 2016, doi: '10.1016/j.fsi.2016.06.022',
    url: 'https://doi.org/10.1016/j.fsi.2016.06.022', ownerRole: 'coauthor',
    // The owner confirmed ordinary co-authorship, without equal-first credit.
    evidence: ['https://api.crossref.org/works/10.1016/j.fsi.2016.06.022', 'https://www.sciencedirect.com/science/article/pii/S1050464816303825'],
  },
];

// Preprint years denote first posting. Links retain the exact owner-supplied
// versions. Current Crossref deposits supersede older PubMed author/title records.
export const preprints: Work[] = [
  {
    id: 'acidic-ecosystems',
    title: 'Metabolic plasticity enables cancer adaptation to acidic tumor ecosystems',
    authors: [
      { name: 'Raafat Chalar' },
      { name: 'Naheel Khatri' },
      { name: 'Jowana Obeid' },
      { name: 'Joon-Hyun Song', owner: true },
      { name: 'Yujie Xiao' },
      { name: 'Saiful Samad' },
      { name: 'Andrew Chen' },
      { name: 'Andrew E. Resnick' },
      { name: 'Khadijeh Karbalaei' },
      { name: 'Janet Allopenna' },
      { name: 'Cungui Mao' },
      { name: 'Christopher J. Clarke' },
      { name: 'Fabiola Velazquez' },
      { name: 'Bo Chen' },
      { name: 'Daniel Canals' },
      { name: 'Yusuf A. Hannun' },
      { name: 'Mehdi Damaghi' },
    ],
    venue: 'bioRxiv', year: 2026, version: 3, doi: '10.64898/2026.01.14.699600',
    url: 'https://www.biorxiv.org/content/10.64898/2026.01.14.699600v3.abstract', ownerRole: 'coauthor',
    evidence: ['https://api.crossref.org/works/10.64898/2026.01.14.699600'],
  },
  {
    id: 'parp-persistence',
    title: 'Metabolic plasticity increases evolvability and drives persistence to PARP inhibitor in ovarian cancer',
    authors: [
      { name: 'Adriana Del Pino Herrera', coFirst: true },
      { name: 'Joon-Hyun Song', owner: true, coFirst: true },
      { name: 'Karla Torres-Arciga' },
      { name: 'Susoma Halder' },
      { name: 'Kadin El Bakkouri' },
      { name: 'Jowana Obeid' },
      { name: 'William M. Burke' },
      { name: 'Mehdi Damaghi' },
      { name: 'Meghan C. Ferrall-Fairbanks' },
    ],
    venue: 'bioRxiv', year: 2025, version: 2, doi: '10.1101/2025.10.08.681266',
    url: 'https://www.biorxiv.org/content/10.1101/2025.10.08.681266v2.abstract', ownerRole: 'co-first',
    // Equal-first credit is explicit in archived v1 and confirmed for v2 by the
    // owner. Current title and nine-author list use the current Crossref deposit.
    evidence: ['https://api.crossref.org/works/10.1101/2025.10.08.681266', 'https://europepmc.org/articles/PMC12632404'],
  },
  {
    id: 'genome-robustness',
    title: 'Human and bats genome robustness under COSMIC mutational signatures',
    authors: [
      { name: 'Joon-Hyun Song', owner: true },
      { name: 'Ying Zeng' },
      { name: 'Liliana M. Dávalos' },
      { name: 'Thomas MacCarthy' },
      { name: 'Mani Larijani' },
      { name: 'Mehdi Damaghi' },
    ],
    venue: 'bioRxiv', year: 2024, version: 3, doi: '10.1101/2024.09.05.611453',
    url: 'https://www.biorxiv.org/content/10.1101/2024.09.05.611453v3', ownerRole: 'first',
    evidence: ['https://europepmc.org/articles/PMC11418966'],
  },
];
