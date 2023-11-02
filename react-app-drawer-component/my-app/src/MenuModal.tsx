import { Overlay } from './Overlay';
import { MenuItem } from './MenuItem';
import './MenuModal.css';

type Props = {
  isOpen: boolean;
  items: {
    item: string;
    id: number;
  }[];
  handleOverlayClick: () => void;
  onClick: () => void;
};

type Item = {
  item: string;
  id: number;
};

export function MenuModal({
  isOpen,
  items,
  handleOverlayClick,
  onClick,
}: Props) {
  const menuItems = items.map((item: Item) => {
    return <MenuItem onClick={onClick} key={item.id} item={item.item} />;
  });

  return (
    <>
      <Overlay isOpen={isOpen} onMain={handleOverlayClick} />
      <div className={`menu-items ${!isOpen ? 'menu-items-closed' : ''}`}>
        {menuItems}
      </div>
    </>
  );
}
