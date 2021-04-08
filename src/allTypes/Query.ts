import { queryType } from '@nexus/schema';
import { data } from 'src/data';
import { Bio } from './index';
export const Query = queryType({
  definition(t) {
    // t.string('name', () => 'Ben'); old way
    // t.string('name', { resolve: () => 'Ben' }); // new way
    t.field('bio', {
      type: Bio,
      resolve: () => data.bio
    });
  }
});
