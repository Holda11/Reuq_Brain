import { NavLink } from 'react-router-dom'
import './menu.scss'

const Menu = () => {
  const navigationItems = [
    {
      label: 'Dashboard',
      url: '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
            fill="currentColor"
          />
        </svg>
      ),
      isActive: true,
    },
    {
      label: 'Moje zařízení',
      url: 'my-device',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Chip">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3M2 8h3M2 12h3M2 16h3M19 8h3M19 12h3M19 16h3"/>
            <rect x="7" y="7" width="10" height="10" rx="2"/>
            <rect x="10" y="10" width="4" height="4" rx="1"/>
        </g>
        </svg>

      ),
    },
    {
      label: 'Kontakty',
      url: 'contact',
      icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Users">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="2"/>
                <path d="M6 18a6 6 0 0 1 12 0"/>
                <circle cx="6.5" cy="11" r="1.5"/>
                <path d="M2.5 18a4 4 0 0 1 8 0"/>
            </g>
            </svg>

      ),
    },
    {
      label: 'Nastavení',
      url: 'settings',
      icon: (
            <svg  width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Settings (gear)" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.25"/>
                    <circle cx="12" cy="12" r="7.25"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" />
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(45 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(90 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(135 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(180 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(225 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(270 12 12)"/>
                    <rect x="11" y="1.75" width="2" height="4" rx="1" transform="rotate(315 12 12)"/>
                </g>
            </svg>

      ),
    },
    {
      label: 'Nápověda',
      url: 'help',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Help">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9 9a3 3 0 1 1 3 3v2"/>
            <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
        </g>
        </svg>

      ),
    },
  ]

  return (
    <aside className="menu" role="navigation" aria-label="Hlavní navigace">
      

      <nav className="menu__nav">
        <ul className="menu__list">
          {navigationItems.map((item) => (
            <li key={item.label}>
                <NavLink
                to={item.url}
                className={({ isActive }) => `menu__link ${isActive ? ' menu__link--active' : ''}`}
                end
                >
                
                <span className="menu__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="menu__label">{item.label}</span>
                </NavLink>
              
            </li>
          ))}
        </ul>
      </nav>
      <footer className="menu__footer">
        <span className="menu__version" aria-label="Verze 1.0.0">
          Verze 1.0.0
        </span>
        <span className="menu__copyright">© 2025 IoT Monitor</span>
      </footer>
    </aside>
  )
}

export default Menu
