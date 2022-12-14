import PropTypes from "prop-types";
import {
	Image,
	Card,
	UserName,
	Description,
	DescriptionText,
	DescriptionLocation,
	Info,
	InfoItem,
	InfoItemLabel,
	InfoItemQuantity,
} from "./Profile.styled";
export default function Profile({
	userName,
	tag,
	location,
	avatar,
	followers,
	views,
	likes,
}) {
	return (
		<Card className="profile">
			<Image
				src={avatar}
				alt={tag}
				className="avatar"
			/>
			<Description className="description">
				<UserName className="name">{userName}</UserName>
				<DescriptionText className="tag">{tag}</DescriptionText>
				<DescriptionLocation className="location">
					{location}
				</DescriptionLocation>
				<Info className="stats">
					<InfoItem>
						<InfoItemLabel className="label">Followers: </InfoItemLabel>
						<InfoItemQuantity className="quantity">
							{followers}
						</InfoItemQuantity>
					</InfoItem>
					<InfoItem>
						<InfoItemLabel className="label">Views: </InfoItemLabel>
						<InfoItemQuantity className="quantity">{views}</InfoItemQuantity>
					</InfoItem>
					<InfoItem>
						<InfoItemLabel className="label">Likes: </InfoItemLabel>
						<InfoItemQuantity className="quantity">{likes}</InfoItemQuantity>
					</InfoItem>
				</Info>
			</Description>
		</Card>
	);
}

Profile.propTypes = {
	userName: PropTypes.string.isRequired,
	tags: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
	followers: PropTypes.number,
	views: PropTypes.number,
	likes: PropTypes.number,
};
