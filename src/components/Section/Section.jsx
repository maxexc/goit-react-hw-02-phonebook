import PropTypes from 'prop-types';
import { SectionStyle, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <SectionStyle title="{title}">
            <SectionTitle>{title}</SectionTitle>
            {children}            
        </SectionStyle>
    )
};

Section.prototype = {
    title: PropTypes.string.isRequired,  
}

export default Section;