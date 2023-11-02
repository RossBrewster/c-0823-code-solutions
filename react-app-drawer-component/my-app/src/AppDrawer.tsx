import { HamburgerButton } from './HamburgerButton';
import { MenuModal } from './MenuModal';
import { useState } from 'react';

const menuItems = [
  {
    item: 'Products',
    id: 0,
  },
  {
    item: 'About Us',
    id: 1,
  },
  {
    item: 'Careers',
    id: 2,
  },
];

export function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerClick() {
    setIsOpen(!isOpen);
  }

  function handleOverlayClick() {
    setIsOpen(!isOpen);
  }

  function handleAnchorClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={handleHamburgerClick} />
      <MenuModal
        isOpen={isOpen}
        items={menuItems}
        handleOverlayClick={handleOverlayClick}
        onClick={handleAnchorClick}
      />
    </>
  );
}
