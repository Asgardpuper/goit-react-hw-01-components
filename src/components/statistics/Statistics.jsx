import PropTypes from "prop-types";
import {
  StatBox,
  StatList,
  StatItem,
  StatPercentage,
  StatTitle,
  Container,
  StatLabel,
} from "./Statistics.styled";
export default function Statistics({ stats, title }) {
  return (
    <StatBox className="statistics">
      <Container className="container">
        <StatTitle className="statistics-title">
          {title && <h2 className="title">{title}</h2>}
        </StatTitle>
        <StatList className="stat-list">
          {stats.map((element) => {
            return (
              <StatItem key={element.id} className="item">
                <StatLabel className="label">{element.label}</StatLabel>
                <StatPercentage className="percentage">
                  {element.percentage}
                </StatPercentage>
              </StatItem>
            );
          })}
        </StatList>
      </Container>
    </StatBox>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
