
import Logo from '../Logo.png'
export default function Navbar(){
   return(
    
       <header>
         <img src= {Logo} alt='error loading image' width='100px' /> 
         <button className='dashboard'> Dashboard </button>
         <button> Employees </button>
         <button> Projects </button>
         <button> Profile </button>
         
         </header>
   
   )
}