import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { cookies } from 'next/headers'

// PROBLEM
// . You were running into an infinite redirect loop
// . Figure out how to not run into that infinite redirect loop

// Helpful websites for figuring this problem out:
// https://jools.dev/server-side-auth-with-nextjs-context-and-hooks
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://blog.bitsrc.io/understanding-dependencies-in-useeffect-7afd4df37c96
// https://stackoverflow.com/questions/74961209/how-to-detect-when-redirect-happens-in-react

// define the props
type Auth = true | false
type AuthState = {
  isAuthenticated: Auth;
  setisAuthenticated(auth: Auth): void;
};

export const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const [isAuthenticated, setisAuthenticated] = useState<Auth>(false);
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        //console.log(cookies().getAll)``
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)abc123\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // console.log("\n\n")
        // console.log(!isAuthenticated)
        // console.log(cookieValue)
        // console.log(!isAuthenticated && cookieValue === "")
        // console.log("\n\n")

        // if (!isAuthenticated && counter < 2) { // NOTE: Using this counter approach will cause an infinite redirect loop...
        // if (!isAuthenticated && cookieValue === "") {
        if (cookieValue === "") {
            console.log("Dude, you gotta sign in...")
            
            //setCounter(counter+1) // Needed?

            location.replace("http://localhost:5000/redirect")
        } else {
            console.log("You're signed in lol...")
            setisAuthenticated(true)
        }
    }, [isAuthenticated]) // Need to have isAuthenticated here?

    return (
      <AuthContext.Provider value={{ isAuthenticated, setisAuthenticated }}>
        {props.children}
      </AuthContext.Provider>
    );
  };