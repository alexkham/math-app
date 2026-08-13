import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RouteSync() {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    let socket = null
    let timer = null
    let dead = false

    const connect = () => {
      if (dead === true) {
        return
      }

      try {
        socket = new WebSocket('ws://localhost:4001')
      } catch (e) {
        timer = setTimeout(connect, 2000)
        return
      }

      socket.onmessage = (event) => {
        let data = null

        try {
          data = JSON.parse(event.data)
        } catch (e) {
          return
        }

        if (data === null) {
          return
        }

        if (typeof data.route !== 'string') {
          return
        }

        if (router.asPath === data.route) {
          return
        }

        router.push(data.route)
      }

      socket.onclose = () => {
        if (dead === false) {
          timer = setTimeout(connect, 2000)
        }
      }

      socket.onerror = () => {
        if (socket !== null) {
          socket.close()
        }
      }
    }

    connect()

    return () => {
      dead = true

      if (timer !== null) {
        clearTimeout(timer)
      }

      if (socket !== null) {
        socket.close()
      }
    }
  }, [router])

  return null
}