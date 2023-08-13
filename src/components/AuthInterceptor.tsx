// THINK: This module might not actually be necessary. You can problem
//			  write all the auth-checking logic inside of AuthContext...

import { FC, useEffect } from "react"
import { useContext } from "react";
import { AuthContext } from '@/components/AuthContext'

export const AuthInterceptor: FC<React.PropsWithChildren> = ({children}) => {
	const context = useContext(AuthContext);

	useEffect(() => {
		console.log(context?.isAuthenticated)
	})

	return context?.isAuthenticated? <>{children}</> : <></>
}