import React from 'react';

const AppFooter = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <p className='mb-0 text-muted'>
                &copy; {new Date().getFullYear()}{' '}
                {process.env.REACT_APP_COMPANY_NAME} Crafted with{' '}
                <i className='mdi mdi-heart text-danger'></i> by VeoApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
