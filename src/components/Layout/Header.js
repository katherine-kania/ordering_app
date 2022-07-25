import { Fragement } from 'react'

import mealsImage from '../../assests/mealsImage.jpg'
import classes from './Header.module.css'

const Header = props => {
    return <Fragement>
        <header className={classes.header}>
            <h1>Yummy Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food" />
        </div>
    </Fragement>
}

export default Header