import NavBar from '../../components/NavBar'
import styles from './Layout.module.scss'

export default function Layout() {
    return (
        <div className={styles.container}>
            <NavBar />
        </div>
    )
}