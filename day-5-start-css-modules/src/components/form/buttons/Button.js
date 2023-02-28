import styles from './Button.module.css'
import danger from './Danger.module.css'

function Button({children, warning }) {
  return (
    <button className={`${styles.button} ${warning ? danger.danger : null}`}>{children}</button>
  )
}

export default Button
