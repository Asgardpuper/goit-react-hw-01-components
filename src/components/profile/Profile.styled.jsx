import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	min-height: 460px;
	margin: auto;
	box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	background: #fff;
	border-radius: 12px;
	max-width: 800px;
	position: relative;
	margin-top: 100px;
`;

export const Image = styled.img`
	width: 150px;
	height: 150px;
	left: 50%;
	top: 0;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	z-index: 4;
	box-shadow: 0px 5px 50px 0px rgb(108, 68, 252),
		0px 0px 0px 7px rgba(107, 74, 255, 0.5);
`;

export const UserName = styled.p`
	font-weight: 700;
	font-size: 24px;
	color: #6944ff;
	margin-bottom: 15px;
`;

export const Description = styled.div`
	margin-top: -35px;
	text-align: center;
	padding: 0 20px;
	padding-bottom: 40px;
`;

export const DescriptionText = styled.p`
	font-size: 18px;
	font-weight: 500;
	color: #324e63;
	margin-bottom: 15px;
`;

export const DescriptionLocation = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: 600;
`;

export const Info = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-start;
	margin-top: 35px;
	list-style: none;
`;

export const InfoItem = styled.ul`
	padding: 10px 35px;
	min-width: 150px;
`;
export const InfoItemLabel = styled.span`
	font-weight: 700;
	font-size: 27px;

	color: #324e63;
`;

export const InfoItemQuantity = styled.span`
	font-weight: 700;
	margin-top: 7px;
	color: #6944ff;
`;
