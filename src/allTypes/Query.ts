import { queryType, idArg } from '@nexus/schema';
import { data } from 'src/data';
import { Bio, Position } from './index';

export const Query = queryType({
  definition(t) {
    // t.string('name', () => 'Ben'); old way
    // t.string('name', { resolve: () => 'Ben' }); // new way
    t.field('bio', {
      type: Bio,
      resolve: () => data.bio
    });
    t.list.field('positions', {
      type: Position,
      resolve: () => data.positions
    });

    t.field('position', {
      type: Position,
      args: { id: idArg() },
      resolve: (_, { id }: { id: string }, __) => {
        return data.positions.find(position => position.id === id);
      }
    });
  }
});
