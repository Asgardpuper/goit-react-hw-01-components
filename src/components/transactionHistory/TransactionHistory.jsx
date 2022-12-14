import { Table, TableContainer, Td, Th } from "./TransactionHistory.styled";
import PropTypes from "prop-types";
export default function TransactionHistory({ transactions }) {
	return (
		<TableContainer>
			<Table className="transaction-history">
				<thead>
					<tr>
						<Th>Type</Th>
						<Th>Amount</Th>
						<Th>Currency</Th>
					</tr>
				</thead>

				<tbody>
					{transactions.map((transaction) => {
						return (
							<tr key={transactions.id}>
								<Td>{transaction.type}</Td>
								<Td>{transaction.amount}</Td>
								<Td>{transaction.currency}</Td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</TableContainer>
	);
}

TransactionHistory.propTypes = {
	transaction: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.number.isRequired,
			currency: PropTypes.string.isRequired,
		})
	),
};
