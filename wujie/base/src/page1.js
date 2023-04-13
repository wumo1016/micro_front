/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from 'react'
import { startApp, destroyApp } from 'wujie'

export default function page1() {
  const myRef = useRef(null)
  let destroy = null

  const startAppFunc = async () => {
    destroy = await startApp({
      name: 'ReactApp',
      url: 'http://localhost:3001',
      el: myRef.current
    })
  }
  useEffect(() => {
    startAppFunc()
    // 卸载
    return () => {
      if (destroy) destroyApp(destroy)
    }
  })
  return <div ref={myRef}></div>
}
