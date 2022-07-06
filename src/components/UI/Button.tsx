import styles from './Button.module.css';
import { IButton } from '../../interfaces/interface';

export function Button(props: IButton) {
  return (
    <button
      className={styles.defaultBtnStyle}
      style={props.style}
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
}
