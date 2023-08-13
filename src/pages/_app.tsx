import { AuthProvider } from "@/components/AuthContext";
import { AuthInterceptor } from "@/components/AuthInterceptor";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* <AuthInterceptor> */}
      <Component {...pageProps} />
      {/* </AuthInterceptor> */}
    </AuthProvider>
  )
}
