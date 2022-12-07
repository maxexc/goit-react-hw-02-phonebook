import PropTypes from 'prop-types';

const Filter = ({value, onFilter}) => {
    return (
        <label>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onFilter}
                placeholder="Enter request"
            ></input>
        </label>        
    )    
 }

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}
