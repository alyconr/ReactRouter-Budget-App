import { Form, NavLink } from 'react-router-dom';
import boxmoney from '../assets/boxmoney.png';
import {TrashIcon} from '@heroicons/react/24/solid';

const Nav = ({userName}) => {
    return ( 
        <nav>
            <NavLink to ="/"
            aria-label='Go to home'
            >
                <img src={boxmoney} height={'50px'} width={'50px'} alt="logo" />
                <span>AlyconrBudget</span>
            </NavLink>
            {
                userName && (
                    <Form method="post"
                    action="/logout"
                    onSubmit={e => {
                        if (!confirm('Are you sure you want to Delete user and all his data?')) {
                            e.preventDefault();
                        }
                    }}
                    >
                        <button type="submit" className='btn btn--warning'>
                            <span>Delete User</span>
                            <TrashIcon width={20} />
                            
                    
                            
                            
                        </button>
                        
                    </Form>
                )
            }
        </nav>
     );
}
 
export default Nav;