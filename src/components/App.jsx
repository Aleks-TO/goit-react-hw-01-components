import { Profile } from './01-profile/Profile';
import user from './01-profile/user.json';
import { Statistics } from './02-statistics/Statistics';
import data from './02-statistics/data.json';
import FriendList from './03-friendList/FriendList';
import friends from './03-friendList/friends.json';
import TransactionHistory from './04-transactionHistory/TransactionHistory';
import transactions from './04-transactionHistory/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
