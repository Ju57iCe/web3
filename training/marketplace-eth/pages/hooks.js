import { useEthPrice } from "@components/hooks/useEthPrice"
import { useEffect, useState } from "react"


const useCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() =>{
      setCount(c => c + 1)
    }, 1000)
  }, [])

  // console.log("Calling useCounter!")

  return count
}

const SimpleComponent = () => {
  const { eth } = useEthPrice()
  return (
    <h1>SimpleComponent - {eth.data}</h1>
  )
}

export default function HooksPage() {
  const { eth } = useEthPrice()
  return (
    <>
    <h1>Hello world {eth.data}</h1>
    <SimpleComponent />
    </>
  )
}
