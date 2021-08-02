import React from 'react'
import styles from './styles.module.css'

const Header = () => {
	return (
    <div className={styles.wrapper}>
      <div className='container mx-auto'>
        <img
          className='mx-auto'
          style={{ width: '64px' }}
          src='/logo_palpitebox.png'
          alt='PalpiteBox'
        />
      </div>
    </div>
  );
}

export default Header
