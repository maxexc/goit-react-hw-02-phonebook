import PropTypes from 'prop-types';
import { StatisticsList } from './Statistic.styled';

const Statistics = ({good, neutral, bad, total, PositivePercentage}) => {
    return (
        <div>
            <StatisticsList>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>PositivePercentage: {PositivePercentage} %</li>
            </StatisticsList>
        </div>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    PositivePercentage: PropTypes.number.isRequired,
}

export default Statistics;