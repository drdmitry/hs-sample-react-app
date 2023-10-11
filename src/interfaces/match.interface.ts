export const TAG = {
  VP: 'vp',
  employees20_50: '20-50 employees',
  B2B: 'b2b',
  DACH: 'dach',
  Energy: 'energy',
} as const;

type ObjectValues<T> = T[keyof T];

export type Tag = ObjectValues<typeof TAG>;

export type Signal = "Event" | "Jobwechsel" | "Geburtstag" | "LinkedIn-Beitrag" | "Artikel" | "Beförderung";

export type MatchStatus = "pending" | "inprogress" | "processed";

export type MatchType = {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  location: {
    city: string;
    country: string;
  },
  tags: Tag[];
  signals: Signal[];
  status: MatchStatus;
  stars: string;
}
