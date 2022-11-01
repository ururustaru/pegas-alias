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
    <div className="fullscreen-btn" onClick={handleClick}>
      [&#10536;]
    </div>
  )
}
