import styled from "styled-components";

export const TableContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-top: 200px;
`;
export const Table = styled.table`
	width: 800px;
	border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	background: linear-gradient(45deg, #49a09d, #5f2c82);
`;

export const Td = styled.td`
	text-align: center;
	padding: 15px;
	background-color: rgba(255, 255, 255, 0.2);
	color: #fff;
`;

export const Th = styled.th`
	text-align: center;
	padding: 15px;
	background-color: rgba(255, 255, 255, 0.2);
	color: #fff;
`;
