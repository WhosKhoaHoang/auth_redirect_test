import { AuthProvider } from "@/components/AuthContext";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // PROTIP: Don't actually need AuthInterceptor
  return (
    <AuthProvider>
      {/* <AuthInterceptor> */}
      <Component {...pageProps} />
      {/* </AuthInterceptor> */}
    </AuthProvider>
  )
}
