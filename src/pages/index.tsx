import { AuthContext } from "@/components/AuthContext"
import { useContext } from "react"

export default function Home() {
  const context = useContext(AuthContext)
  return (
    <>
      <p>isAuthenticated: {String(context?.isAuthenticated)}</p>
      <p>"test123"</p>
    </>
  )
}
