import "../styles/header.css"
import { HeaderLogo } from './HeaderLogo'
import { HeaderIcons } from './HeaderIcons'

export default function Header() {
    return (
        <header className="bg-white mx-auto flex max-w-7xl items-center justify-between p-6 ">
            <HeaderLogo title="MY JEWELRY STORE"/>
            <HeaderIcons/>
        </header>
    )
}