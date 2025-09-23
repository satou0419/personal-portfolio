import './homepage.scss'
import './globals.css'
export default function Homepage(){

    return(
        <main id='content-homepage'>
            <nav id='nav-homepage'>
                <img src="./assets/images/logo.svg" alt="logo"/>

                <ul>
                    <li><a>Home</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </main>
    )
}