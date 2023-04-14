/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from 'react'
import { startApp, destroyApp } from 'wujie'

export default function WujieReact(props) {
  const myRef = useRef(null)
  let destroy = null

  const startAppFunc = async () => {
    destroy = await startApp({
      ...props,
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
