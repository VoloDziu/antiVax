import React from 'react'

const baseline = 0.750
import styles from './Media.css'

const Media = ({
  alignItems = 'flex-start',
  children
}) => {
  const style = {
    alignItems
  }

  return (
    <div style={style} className={styles.media}>
      {children}
    </div>
  )
}

const MediaBody = ({
  children
}) => {
  return (
    <div className={styles.media__body}>
      {children}
    </div>
  )
}

const MediaFigure = ({
  n = 1,
  nl = 0,
  children
}) => {
  const style = {
    marginRight: `${baseline * n}rem`,
    marginLeft: `${baseline * nl}rem`
  }

  return (
    <div style={style} className={styles.media__figure}>
      {children}
    </div>
  )
}

export {Media, MediaBody, MediaFigure}
