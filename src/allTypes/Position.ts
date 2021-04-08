import { objectType } from '@nexus/schema';
import { differenceInYears, differenceInMonths } from 'date-fns';
import { PositionInterface } from 'src/interfaces';
export const Position = objectType({
  name: 'Position',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('company');
    t.string('location');
    t.string('employmentType');
    t.string('startDate', {
      resolve: position => position.startDate
    });
    t.string('endDate', {
      resolve: position => position.endDate
    });

    t.int('years', {
      resolve: ({ endDate, startDate }) =>
        differenceInYears(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        )
    });

    t.int('months', {
      resolve: ({ endDate, startDate }) =>
        differenceInMonths(
          endDate ? new Date(startDate) : new Date(),
          new Date(startDate)
        ) % 12
    });

    t.list.string('achievements', {
      resolve: (position: PositionInterface) => position.achievements
    });

    t.list.string('technology', {
      resolve: (position: PositionInterface) => position.technologyUsed
    });
  }
});
