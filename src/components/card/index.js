import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Feather from 'feathered';
// Components
import { DropdownItem, DropdownButton } from '../dropdown';

function NewCard(props) {
  return (
    <NewCardStyled {...props}>
      <div className='plus-img'>
        <span>
          <Feather icon='plus' width={48} height={48} />
        </span>
      </div>
      <p>New project</p>
    </NewCardStyled>
  );
}

const NewCardStyled = styled('a')`
  display: block;
  width: 180px;
  padding: 10px 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;

    .plus-img {
      border: 3px solid #a1a1a1;

      svg {
        color: #a1a1a1;
      }
    }
  }

  &:active {
    cursor: pointer;
    
    .plus-img {
      border: 3px solid ${p => p.theme.colors.primary};

      svg {
        color: ${p => p.theme.colors.primary};
      }
    }
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 25px;
  }

  .plus-img {
    border: 3px solid #686868;
    height: 100px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      svg { 
        height: 5rem;
        color: #686868;
      }
    }
  }
`;

class Card extends Component {
  mounted = false;
  state = {
    active: false,
  };

  componentDidMount() { this.mounted = true; }
  componentWillUnmount() { this.mounted = false; }

  ssMounted = state => this.setState(state);

  validTarget = id => {
    return id.split('-')[0] === this.props.id;
  };

  activate = e => {
    if (this.validTarget(e.target.id)) this.ssMounted(() => ({ active: true }));
  };

  deactivate = () => this.ssMounted(() => ({ active: false }));

  render() {
    const { img, href, title, length, id } = this.props;
    return (
      <CardStyled
        className={this.state.active ? 'active' : ''}
        href={href}
        title={title}
        id={id}
        onMouseDown={this.activate}
        onMouseUp={this.deactivate}
      >
        <div className='card-image-container' id={id + '-ic'}>
          <img src={img} id={id + '-i'} />
        </div>
        <div className='card-title' id={id + '-ct'}>
          <p id={id + '-p'}>{title}</p>
          <DropdownButton id='uniquevaluedd'>
            <DropdownItem>Hello</DropdownItem>
            <DropdownItem>Hello 2</DropdownItem>
            <DropdownItem>Hello 3</DropdownItem>
          </DropdownButton>
        </div>
        <p className='card-timestamp' id={id + '-ct'}>{length}</p>
      </CardStyled>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  length: PropTypes.string,
};


const CardStyled = styled('div')`
  display: block;
  width: calc(140px + 20px + 20px);
  text-decoration: none;
  padding: 0px 10px;
  border-radius: 3px;

  &:hover {
    background-color: #686868;
    .card-title {
      button {
        background-color: #565656;
      }
    }
  }

  &.active {
    background-color: transparent;
    .card-image-container {
      background-color: #686868;
    }
    .card-title {
      background-color: ${p => p.theme.colors.primary};

      button {
        background-color: #0879FE;
      }
    }
  }

  .card-image-container {
    width: auto;
    border-radius: 3px;
    padding: 10px;
    
    img {
      display: block;
      width: 140px;
      height: 100px;
      background-color: ${p => p.theme.colors.fg};
      border-radius: 3px;
    }
  }

  .card-title {
    position: relative;
    margin: 5px 0px;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 1rem;
    display: flex;

    p {
      width: 140px;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      margin: 5px 0px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .card-timestamp {
    color: #b1b1b1;
    font-size: .85rem;
    padding: 0px 10px;
  }
`;

const CardList = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default Card;
export { CardList, NewCard };