import React from 'react';
import pageWrapper from './page-wrapper.module.css'

export const PageWrapper = ({children}) => {
  return(
    <div className={pageWrapper.main}>
      {children}
    </div>
  )
}
