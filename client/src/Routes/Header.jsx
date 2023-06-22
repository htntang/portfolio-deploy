import NavigationBar from './NavigationBar.jsx'

export default function Header(){
    return(
        <header>
            <a href="/" class="logo">
                <img class="logo" src="https://i.imgur.com/nrDYLBk.png" />
            </a>
            
            <NavigationBar />
        </header>
    )
}