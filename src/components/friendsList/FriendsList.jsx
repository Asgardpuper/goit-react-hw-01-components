import FriendsListItem from "./FriendListItem";
import PropTypes from "prop-types";
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

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool,
			id: PropTypes.number,
		})
	),
};
