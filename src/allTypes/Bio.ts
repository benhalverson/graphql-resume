import { objectType } from '@nexus/schema';
import { BioInterface } from '../interfaces';

export const Bio = objectType({
  name: 'Bio',
  definition(t) {
    t.string('name');
    t.string('email');
    t.string('tagline');
    t.url('github', { resolve: (bio: BioInterface) => new URL(bio.github) });
    t.url('website', { resolve: (bio: BioInterface) => new URL(bio.website) });
    t.url('linkedin', {
      resolve: (bio: BioInterface) => new URL(bio.linkedin)
    });
    t.url('twitter', { resolve: (bio: BioInterface) => new URL(bio.twitter) });
  }
});
