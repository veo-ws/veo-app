import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthMethod } from '@veo/hooks/AuthHooks';
const AppHeader = ({ headerClass }) => {
  const { logout } = useAuthMethod();
  return (
    <React.Fragment>
      <header id='page-topbar' className={headerClass}>
        <div className='layout-width'>
          <div className='navbar-header'>
            <div className='d-flex'>
              <div className='navbar-brand-box horizontal-logo'>
                <Link to='/' className='logo logo-dark'>
                  <span className='logo-sm'>
                    {/* <img src={logoSm} alt='' height='22' /> */}
                  </span>
                  <span className='logo-lg'>
                    {/* <img src={logoDark} alt='' height='17' /> */}
                  </span>
                </Link>

                <Link to='/' className='logo logo-light'>
                  <span className='logo-sm'>
                    {/* <img src={logoSm} alt='' height='22' /> */}
                  </span>
                  <span className='logo-lg'>
                    {/* <img src={logoLight} alt='' height='17' /> */}
                  </span>
                </Link>
                <Link onClick={logout} className='dropdown-item'>
                  <i className='mdi mdi-logout text-muted fs-16 align-middle me-1'></i>{' '}
                  <span className='align-middle' data-key='t-logout'>
                    Logout
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default AppHeader;
