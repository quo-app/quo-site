import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Feather from 'feathered';
// Components
import { List, ListItem } from '../list';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = { open: false };
  }

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = e => {
    const v = e.target.id.split('-')[0];
    if (v !== this.props.id) this.close();
  };

  mountedSS = (state) => {
    if (this.mounted) this.setState(state);
  };

  open = e => {
    console.log('open')
    e.stopPropagation();
    this.mountedSS({ open: true });
  };

  close = () => this.mountedSS({ open: false });

  render() {
    const { children, id } = this.props;
    const { open } = this.state;
    return (
      <div style={{ position: 'relative' }} id={id}>
        <DropdownButtonStyled onClick={this.open} id={id + '-button'}>
          <span>
            <Feather icon='more-vertical' color='#fff' />
          </span>
        </DropdownButtonStyled>
        <Dropdown open={open} coord={{ x: 0, y: 0 }}>
          {React.Children.map(children, child => React.cloneElement(child, {
            ...child.props,
            onClick: () => {
              if (child.onClick) child.onClick();
              this.close();
            }
          }))}
        </Dropdown>
      </div>
    );
  }
}

DropdownButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string
};

const DropdownButtonStyled = styled('button')`
  height: 100%;
  padding: 1px;
  background-color: transparent;
  border-radius: 3px;
  border: none;
  z-index: 999;

  &:active {
    background-color: #0879FE;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    height: 1rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #565656;
  }
`;

function Dropdown({ open, coord, children }) {
  return (
    <>
      {open && (
        <DropdownStyled coord={coord}>
          <List block>
            {children}
          </List>
        </DropdownStyled>
      )}
    </>
  );
}

function DropdownItem({ children, ...props }) {
  return (
    <ListItem {...props}>
      {children}
    </ListItem>
  );
}

Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string
  })).isRequired,
  onClick: PropTypes.func,
  coord: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
};

Dropdown.defaultProps = {
  onClick: () => { },
  coord: { x: 0, y: 0 },
};

const DropdownStyled = styled('div')`
    position: absolute;
    top: ${p => p.coord.y}px;
    left: ${p => p.coord.x}px;
    min-width: ${p => p.theme.sizes.w.dropdown + p.theme.sizes.unit};
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};
    background-color: #434343;
    padding: 0em .25em;
    color: white;
    z-index: 999;
    box-shadow: 0px 0px 3px rgba(0,0,0,.2), 2px 2px 5px rgba(0,0,0,.3);
`;

export default Dropdown;
export { DropdownItem, DropdownButton };