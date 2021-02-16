import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => (
  <>
    <main className="min-h-screen h-auto z-0 bg-gray-100 px-4">
      <div className="container mx-auto">{children}</div>
    </main>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
