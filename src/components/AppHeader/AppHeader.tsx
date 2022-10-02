import { Logo, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../AppHeader/AppHeader.module.scss';

const AppHeader = () => {
  return (
     <header className={`${styles.panel} pt-4 pb-4`}>
         <a className={`${styles.links} pl-5 pr-5`}>
             <BurgerIcon type="primary" />
             <p className="text text_type_main-default pl-2">Конструктор</p>
         </a>
         <a>
             <ListIcon type="primary" />
         </a>
         <Logo />
     </header>
  )
}

export default AppHeader;