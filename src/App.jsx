import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendsList from "./components/friendsList/FriendsList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import userData from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
	return (
		(
			<Profile
				userName={userData.username}
				tag={userData.tag}
				location={userData.location}
				avatar={userData.avatar}
				followers={userData.stats.followers}
				views={userData.stats.views}
				likes={userData.stats.likes}
			/>
		),
		(
			<Statistics
				stats={data}
				title="Upload Stats"
			/>
		),
		(<FriendsList friends={friends} />),
		(<TransactionHistory transactions={transactions} />)
	);
}
