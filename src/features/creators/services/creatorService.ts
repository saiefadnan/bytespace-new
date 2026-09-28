import { mockMentors } from '../../../data';
import { mockFetch } from '../../../services';
import type { Mentor } from '../types';

export const creatorService = {
  async getAllMentors(): Promise<Mentor[]> {
    return mockFetch<Mentor[]>(mockMentors);
  },

  async getMentorById(id: string): Promise<Mentor | undefined> {
    const mentor = mockMentors.find((m) => m.id === id);
    return mockFetch<Mentor | undefined>(mentor);
  },
};
