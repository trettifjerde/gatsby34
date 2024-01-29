import * as React from 'react';
import Github from '../svg/github';
import Mail from '../svg/mail';
import LinkedIn from '../svg/linkedin';

const Header = () => <header>
    <div className='logo'></div>
    <LinkedIn />
    <Mail />
    <Github />

</header>;

export default Header;