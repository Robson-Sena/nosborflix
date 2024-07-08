import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="Netiflix" />
                </a>
            </div>
            <div className="header--user">
                <a  href="/">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.gAoBZTchuV06h2zGCGTsPgAAAA&pid=Api&P=0&h=180" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}