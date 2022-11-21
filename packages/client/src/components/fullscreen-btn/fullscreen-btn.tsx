import React from 'react'
import './fullscreen-btn.scss'

export function FullscreenBtn() {
  function handleClick(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  }

  return (
    <div className="fullscreen-btn" onClick={handleClick} title="На весь экран">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.57143 16.0714H0V25H8.92857V21.4286H3.57143V16.0714ZM0 8.92857H3.57143V3.57143H8.92857V0H0V8.92857ZM21.4286 21.4286H16.0714V25H25V16.0714H21.4286V21.4286ZM16.0714 0V3.57143H21.4286V8.92857H25V0H16.0714Z" fill="#3B4F7D"/>
      </svg>
    </div>
  )
}
