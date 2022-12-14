import styled from "styled-components";

export const StatBox = styled.section`
	border: 1px solid black;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	display: grid;
	place-items: center;
	background-color: #128cfc;
`;

export const Container = styled.div`
	width: 500px;
	display: flex;
	align-items: center;
	background: #fffffe;
	box-shadow: 0 3px 6px rgba(black, 0.16), 0 3px 6px rgba(black, 0.23);
	border-top: 10px solid #0b5aa2;
`;

export const StatList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
`;

export const StatItem = styled.li`
	display: flex;
	flex-direction: column;
	border: 1px dashed #128cfc;
	padding: 5px 10px;
`;

export const StatLabel = styled.span``;
export const StatPercentage = styled.span`
	margin: 5px;
`;
export const StatTitle = styled.div`
	margin: 0px 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
