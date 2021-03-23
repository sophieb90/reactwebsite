import { findRenderedComponentWithType } from 'react-dom/test-utils'
import '../styles/styles.css'
import {NavLink} from 'react-router-dom'

export function Header ( props ) {
    return(
    const Navigation = (props) => {
        props.item.map((navObject,key) => {
            if( navObject.link === '/' ){
                return(
                    <NavLink key={key} exact to={navObject.link}>
                        {navObject.name}
                    </NavLink>
                )
            }
            else {
                return(
                    <NavLink key = {key} to ={navObject.link}>
                        {NavObject.name}
                    </NavLink>
                )
            }
        } )
        )
    }
    return (
    <header className="main-header">
        <img src={props.logo} />
        <h1>{ props.title }</h1>
        <Navigation items={ props.navigation } />
    </header>
    )
}

export default Header 