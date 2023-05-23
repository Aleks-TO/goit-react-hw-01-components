import { Profile } from './01-profile/Profile';
import user from './01-profile/user.json';
import { Statistics } from './02-statistics/Statistics';
import data from './02-statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};
