import logo from '../../assets/logo.svg';
import { HeaderLogoProps } from '../../interfaces/interface';
import styles from './HeaderLogo.module.css';

export function HeaderLogo(props: HeaderLogoProps) {
  return (
    <div className={styles.logoHeader}>
      <img src={logo} className={styles.appLogo} alt='logo' />
      <h1>{props.title}</h1>
    </div>
  );
}
