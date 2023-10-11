import type { MatchType } from "~/interfaces";

export const matchDataMock: MatchType = {
  id: '1',
  name: "Sasha Riedel",
  companyName: 'Muster GmbH',
  email: 'mustermail@gmail.com',
  phoneNumber: '+4918375068793',
  location: {
    city: 'Hamburg',
    country: 'Deutschland',
  },
  tags: [
    'vp', '20-50 employees', 'b2b', 'dach', 'energy'
  ],
  signals: [
    'Event',
    'Jobwechsel',
  ],
  status: "inprogress",
  stars: "⭐ ⭐ ⭐",
};
