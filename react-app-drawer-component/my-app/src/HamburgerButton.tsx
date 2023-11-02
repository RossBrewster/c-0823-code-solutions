import { IoIosMenu } from 'react-icons/io';
import './HamburgerButton.css';

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

export function HamburgerButton({ onClick, isOpen }: Props) {
  return isOpen ? (
    <h2 onClick={onClick} className="menu-button">
      Menu
    </h2>
  ) : (
    <IoIosMenu className="IoIosMenu menu-button" onClick={onClick} />
  );
}
