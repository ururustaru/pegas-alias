import React from 'react'
import './back-link.scss'

interface IBackLink {
  text: string
  link?: () => void
}

export function BackLink(props: IBackLink) {
  function historyBack(): void {
    window.history.back()
  }
  function handleClick() {
    if (props.link) {
      props.link()
    }
  }
  return (
    <button
      className="back-link"
      onClick={props.link ? handleClick : historyBack}>
      <span className="back-link__icon-wrap">
        <svg
          className="back-link__icon"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.833008 7.24091C0.833008 7.56791 0.975508 7.91171 1.20191 8.13811L6.66891 13.5883C6.92051 13.8398 7.22231 13.9656 7.51581 13.9656C8.22851 13.9656 8.71481 13.4709 8.71481 12.8168C8.71481 12.4563 8.55551 12.1628 8.32911 11.9448L6.45091 10.0666L4.58941 8.35611L6.42571 8.45671H15.9007C16.6554 8.45671 17.1585 7.96201 17.1585 7.24091C17.1585 6.51141 16.6554 6.02501 15.9007 6.02501H6.42571L4.59781 6.12571L6.45091 4.41511L8.32911 2.52851C8.55551 2.31051 8.71481 2.02541 8.71481 1.65651C8.71481 1.00251 8.22851 0.507812 7.51581 0.507812C7.22231 0.507812 6.92051 0.633513 6.66051 0.893513L1.20191 6.34371C0.975508 6.57011 0.833008 6.91381 0.833008 7.24091Z"
            fill="#3B4F7D"
          />
        </svg>
      </span>
      <span className="back-link__text">{props.text}</span>
    </button>
  )
}
