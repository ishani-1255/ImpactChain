import { NavLink } from 'react-router-dom';
const nav = [
    { name: 'Home' ,href: '/Home'},
    {name: 'Donate' , href: '/Donate'},
    {name: 'Explore' , href: '/Explore'},
]
function Header(props){
    return(
        <>
    <div className="flex justify-end bg-white-800 h-16">
                    {nav.map((item) => (
                      < NavLink
                        key={item.name}
                        to={item.href}
                       
                        className = { ({isActive}) =>{
                            return ' px-9 py-4 font-large text-black-200 ' +
                            (isActive ? 'text-black-200' :
                            ' text-gray-400')
                        }

                        }
                    
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className ="bg-gray-300 min-h-screen">
                  {props.children}
                  </div>
                  </>
    );

}
export default Header;