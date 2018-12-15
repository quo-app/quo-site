import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Flex = styled('div')`
    display: flex;
    width: ${p => p.fill ? '100%' : 'auto'};
    height: ${p => p.fill ? '100%' : 'auto'};
    flex-direction: ${p => p.dir || 'row'};
    justify-content: ${p => p.justify || ''};
    align-items: ${p => p.align || ''};
`;

Flex.propTypes = {
    fill: PropTypes.bool,
    dir: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
};

export default Flex;