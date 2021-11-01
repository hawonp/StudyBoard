import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href = "/">
                        <a> StudyBoard </a>
                    </Link>
                </li>
                <li>
                    <Link href = "/board">
                        <a> AskQuesiton</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



export default Nav;