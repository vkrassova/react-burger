import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../AppHeader/AppHeader.module.scss';

const AppHeader = () => {
  return (
     <header className={`${styles.headerContainer} mb-10`}>
         <nav className={`${styles.navigation} pt-4 pb-4`}>
             <ul className={styles.navigation__list}>
                 <li>
                     <a className={`${styles.links} pr-5 mr-2`} href="#">
                         <BurgerIcon type="primary" />
                         <p className="text text_type_main-default pl-2 text_color_primary">Конструктор</p>
                     </a>
                 </li>
                 <li>
                     <a className={`${styles.links} pr-5 pl-5`} href="#">
                         <ListIcon type="secondary" />
                         <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
                     </a>
                 </li>
             </ul>
             <Logo />
             <a className={`${styles.links} pl-5 pr-5`} href="#">
                 <ProfileIcon type="secondary" />
                 <span className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</span>
             </a>
         </nav>
     </header>
  )
}

export default AppHeader;
