import styles from './DropdownItem.module.css';
import { Idropdownitem } from '../../interfaces/interface';

export function DropdownItem(props: Idropdownitem) {
  return (
    <a href='#' className='menuItem' onClick={props.onClick}>
      <span className={styles.menuItemIcon} title={props.title}>
        {props.icon}
      </span>
    </a>
  );
}
