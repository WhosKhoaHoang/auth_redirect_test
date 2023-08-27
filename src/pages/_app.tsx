import { AuthProvider } from "@/components/AuthContext";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // PROTIP: Don't actually need AuthInterceptor or AuthProvider
  return (
    <SessionProvider>
      {/* <AuthProvider> */}
        {/* <AuthInterceptor> */}
        <Component {...pageProps} />
        {/* </AuthInterceptor> */}
      {/* </AuthProvider> */}
    </SessionProvider>
  )
}
