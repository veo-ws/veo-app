import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthMethod } from '@veo/hooks/AuthHooks';
import logoSm from '../../../../assets/images/logo-sm.png';
import logoDark from '../../../../assets/images/logo-dark.png';
import logoLight from '../../../../assets/images/logo-light.png';
import { changeSidebarVisibility } from 'toolkit/actions';
import { useSelector, useDispatch } from 'react-redux';
const AppHeader = ({ headerClass }) => {
  const { logout } = useAuthMethod();
  const dispatch = useDispatch();
  const { sidebarVisibilityType } = useSelector(({ settings }) => settings);
  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;

    dispatch(changeSidebarVisibility('show'));

    if (windowSize > 767)
      document.querySelector('.hamburger-icon').classList.toggle('open');

    //For collapse horizontal menu
    if (document.documentElement.getAttribute('data-layout') === 'horizontal') {
      document.body.classList.contains('menu')
        ? document.body.classList.remove('menu')
        : document.body.classList.add('menu');
    }

    //For collapse vertical and semibox menu
    if (
      sidebarVisibilityType === 'show' &&
      (document.documentElement.getAttribute('data-layout') === 'vertical' ||
        document.documentElement.getAttribute('data-layout') === 'semibox')
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove('vertical-sidebar-enable');
        document.documentElement.getAttribute('data-sidebar-size') === 'sm'
          ? document.documentElement.setAttribute('data-sidebar-size', '')
          : document.documentElement.setAttribute('data-sidebar-size', 'sm');
      } else if (windowSize > 1025) {
        document.body.classList.remove('vertical-sidebar-enable');
        document.documentElement.getAttribute('data-sidebar-size') === 'lg'
          ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
          : document.documentElement.setAttribute('data-sidebar-size', 'lg');
      } else if (windowSize <= 767) {
        document.body.classList.add('vertical-sidebar-enable');
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
      }
    }

    //Two column menu
    if (document.documentElement.getAttribute('data-layout') === 'twocolumn') {
      document.body.classList.contains('twocolumn-panel')
        ? document.body.classList.remove('twocolumn-panel')
        : document.body.classList.add('twocolumn-panel');
    }
  };
  return (
    <React.Fragment>
      <header id='page-topbar' className={headerClass}>
        <div className='layout-width'>
          <div className='navbar-header'>
            <div className='d-flex'>
              <div className='navbar-brand-box horizontal-logo'>
                <Link to='/' className='logo logo-dark'>
                  <span className='logo-sm'>
                    <img src={logoSm} alt='' height='22' />
                  </span>
                  <span className='logo-lg'>
                    <img src={logoDark} alt='' height='17' />
                  </span>
                </Link>

                <Link to='/' className='logo logo-light'>
                  <span className='logo-sm'>
                    <img src={logoSm} alt='' height='22' />
                  </span>
                  <span className='logo-lg'>
                    <img src={logoLight} alt='' height='17' />
                  </span>
                </Link>
              </div>
              <button
                onClick={toogleMenuBtn}
                type='button'
                className='btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger'
                id='topnav-hamburger-icon'
              >
                <span className='hamburger-icon'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>

            <div className='d-flex align-items-center'>
              {' '}
              <Link onClick={logout} className='dropdown-item'>
                <i className='mdi mdi-logout text-muted fs-16 align-middle me-1'></i>{' '}
                <span className='align-middle' data-key='t-logout'>
                  Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default AppHeader;
