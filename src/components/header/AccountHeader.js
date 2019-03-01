import React from 'react';
import styled from 'react-emotion';
import Feather from 'feathered';
// Components
import Logo from '../logo';
import Button from '../button';

function AccountHeader({ authenticated, profile, activeTab }) {
  return (
    <Header>
      <HeaderSection>
        <Logo />
        <Button fontSize='.8rem'>New Project</Button>
      </HeaderSection>
      <HeaderSection>
        <Button color='#b1b1b1' activeColor='#ffffff' active={activeTab === 'projects'} transparent>Projects</Button>
        <Button color='#b1b1b1' activeColor='#ffffff' active={activeTab === 'links'} transparent>Links</Button>
      </HeaderSection>
      <HeaderSection>
        <div>
          <Feather icon='user' />
        </div>
      </HeaderSection>
    </Header>
  );
}

const Header = styled('nav')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: ${p => p.theme.sizes.h.header + p.theme.sizes.unit};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5em 2em;
  background-color: #181818;

  svg {
    height: 24px;
  }
`;

const HeaderSection = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default AccountHeader;