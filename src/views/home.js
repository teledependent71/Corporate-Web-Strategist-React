import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Corporate Web Strategist</title>
        <meta property="og:title" content="Corporate Web Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
