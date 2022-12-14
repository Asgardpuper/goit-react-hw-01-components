import {
	UserCard,
	UserImage,
	UserName,
	UserStatus,
} from "./FriendsList.styled";

export default function FriendsListItem({ avatar, name, isOnline, id }) {
	return (
		<UserCard
			key={id}
			className="item">
			<UserStatus
				className="status"
				isOnline={isOnline}></UserStatus>
			<UserImage
				className="avatar"
				src={avatar}
				alt="User avatar"
				width="48"
			/>
			<UserName className="name">{name}</UserName>
		</UserCard>
	);
}
