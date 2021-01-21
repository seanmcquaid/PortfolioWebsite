import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdMusicalNotes } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);

  const hamburgerMenuOnClick = useCallback(() => {
    setIsMobileMenuDisplayed((prevState) => !prevState);
  }, []);

  const mobileMenuItemOnClick = useCallback(() => {
    setIsMobileMenuDisplayed(false);
  }, []);

  return (
    <NavbarContainer data-testid="navbar" id="navbar">
      <LinkContainer
        to="/"
        onClick={mobileMenuItemOnClick}
        data-testid="homeButton"
        id="homeButton"
        title="Home Page Link"
      >
        <IoMdMusicalNotes />
      </LinkContainer>
      <DesktopNav />
      <HamburgerIcon
        onClick={hamburgerMenuOnClick}
        data-testid="mobileMenuToggleButton"
        id="mobileMenuToggleButton"
        title="Mobile Nav Toggle"
      />
      <MobileNav
        isMobileMenuDisplayed={isMobileMenuDisplayed}
        mobileMenuItemOnClick={mobileMenuItemOnClick}
      />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100px;
  min-width: 100px;
  height: 100%;
  @media (max-width: 975px) {
    position: fixed;
    flex-direction: row;
    height: 80px;
    width: 100%;
  }
`;

const LinkContainer = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffffb6;
  text-decoration: none;
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 975px) {
    display: none;
  }
`;

export default Navbar;