import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const FooterWrapper = ({ children, ...rest }) => {
  return (
    <Container
      className='footer-wrapper'
      style={{
        backgroundColor: 'var(--bs-light)', // Bootstrap 5 değişkenleri kullanılabilir
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        color: 'var(--bs-dark)',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        padding: '10px 32px', // Bootstrap 5 responsive padding sınıfları kullanılabilir
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default FooterWrapper;

FooterWrapper.propTypes = {
  children: PropTypes.node,
};
