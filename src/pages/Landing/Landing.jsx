import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main id="landing-main" className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
