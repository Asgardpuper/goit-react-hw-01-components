import FriendsListItem from "./FriendListItem";
import { UserContainer, UserList } from "./FriendsList.styled";
export default function FriendsList({ friends }) {
	return (
		<UserContainer>
			<UserList className="friend-list">
				{friends.map(FriendsListItem)}
			</UserList>
		</UserContainer>
	);
}
