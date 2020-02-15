import React from 'react'
import {imageURLS} from '../../../assets/images/imageUrls'
const ErrorPage = () => {
  return (
    <img src={imageURLS.notFound} alt = "404: Page not found" style={{width:'100%', height: '100vh'}} />
  )
}

export default ErrorPage
