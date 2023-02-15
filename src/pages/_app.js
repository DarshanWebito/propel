import { store } from '@/Store/store'
import '@/styles/globals.css'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'


export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className='main'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </React.Fragment>
  )
}

