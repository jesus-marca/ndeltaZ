import { NavLink } from "react-router-dom"


export const NavigationPage = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>

        <NavLink to='/help'>Help</NavLink>

    </div>
  )
}
