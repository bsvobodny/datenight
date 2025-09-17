import { useLocation } from 'wouter'
import { FcLeft } from 'react-icons/fc'

import './Header.css'
import { type ReactNode } from 'react'

type HeaderProps = {
  title?: string
  subtitle?: string
  showTitleDecoration?: boolean
  links?: { label: ReactNode; href: string }[]
  hideText?: boolean
}
export const Header = ({
  title,
  subtitle,
  showTitleDecoration = true,
  links,
  hideText = false,
}: HeaderProps) => {
  const [location] = useLocation()
  const isHome = location === '/'

  return (
    <header className={hideText ? 'no-text' : ''}>
      <div className="navigation">
        {!isHome && (
          <button
            className="navigation-link back"
            onClick={() => history.back()}
          >
            <FcLeft />
          </button>
        )}
        {links &&
          links.map((link, index) => (
            <a key={index} className="navigation-link" href={link.href}>
              {link.label}
            </a>
          ))}
      </div>
      {!hideText && (
        <>
          <h1
            className={isHome || showTitleDecoration ? 'with-decoration' : ''}
          >
            {title || 'Cupion'}
          </h1>
          <p className="subtitle">
            {subtitle ||
              'Votre assistant personnel pour des soirées romantiques inoubliables'}
          </p>
        </>
      )}
    </header>
  )
}
