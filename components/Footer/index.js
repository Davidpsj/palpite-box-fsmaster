import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:{' '}
        <a className='hover:underline' href='#'>
          David Júnior
        </a>{' '}
        /{' '}
        <a
          className='hover:underline'
          href='https://linkedin.com/in/david-júnior-05a24827'
          target='_blank'
        >
          Linkedin
        </a>{' '}
        /{' '}
        <a
          className='hover:underline'
          href='https://github.com/Davidpsj'
          target='_blank'
        >
          GitHub
        </a>
        <div className='mt-4'>
          <img
            className='inline p-4'
            style={{ width: '192px' }}
            src='/logo_semana_fsm.png'
          />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
