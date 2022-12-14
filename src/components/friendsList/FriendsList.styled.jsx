import styled from "styled-components";

export const UserContainer = styled.div`
	max-width: 400px;
	margin: 50px auto;
`;

export const UserList = styled.ul`
	background: #fff;
	border-radius: 2px;
	list-style: none;
	padding: 10px 20px;
`;

export const UserCard = styled.li`
	display: flex;
	margin: 10px;
	padding-bottom: 5px;
	padding-top: 5px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const UserImage = styled.img`
	border-radius: 50%;
	width: 64px;
`;

export const UserName = styled.p`
	margin-top: 10px;
	font-size: 18px;
`;

export const UserStatus = styled.div`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: ${(props) => (props.isOnline ? "green" : "red")};
`;
