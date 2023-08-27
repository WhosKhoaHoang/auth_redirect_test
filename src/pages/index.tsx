import { AuthContext } from "@/components/AuthContext"
import { useSession } from "next-auth/react"
import { useContext, useEffect } from "react"

export default function Home() {
  const context = useContext(AuthContext)
  const { data } = useSession()

  useEffect(()=> {
    console.log("Hello frontend. Here's your token:")
    console.log(data)
  }, [data])
  // data won't be fetched right away so data will initially show "undefined".
  // Set data as a dependency here so that the console.log shows updated
  // information when it eventually is fetched.
  //  Credit: https://stackoverflow.com/a/76666508/7830099

  return (
    <>
      <p>isAuthenticated: {String(context?.isAuthenticated)}</p>
      <p>"test123"</p>
    </>
  )
}
