import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}} className="pl-4">
            <DragIcon type="secondary" />
            <div className="pl-2">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
                />
            </div>
        </div>
    )
}

export default BurgerConstructor;