import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../AppHeader/AppHeader.module.scss';

const AppHeader = () => {
  return (
     <header className={`${styles.panel} pt-4 pb-4`}>
         <div className={styles.linksWrap}>
             <a className={`${styles.links} pl-5 pr-5`}>
                 <BurgerIcon type="primary" />
                 <p className="text text_type_main-default pl-2">Конструктор</p>
             </a>
             <a className={`${styles.links} pr-5`}>
                 <ListIcon type="secondary" />
                 <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
             </a>
         </div>
         <Logo />
         <a className={`${styles.links} pl-5 pr-5`}>
             <ProfileIcon type="secondary" />
             <span className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</span>
         </a>
     </header>
  )
}

export default AppHeader;