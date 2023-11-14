import React from 'react'
import styles from '../../styles/header.module.css'
//importar componente de imagen
import Logo from '../../public/logo.jpg'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>

                <a href="/">
                    <img src={Logo} alt="" width={100} height={40} />
                </a>

                <nav className={`${styles.navegacion}`}>
                    <a href="/">Inicio</a>
                    <a href="/aviso-privacidad">Aviso de Privacidad</a>
                    <a href="/acerca-de">Acerca De</a>
                </nav>
            </div>
        </header>

        <Outlet />
    </div>
  )
}

export default Layout