import React from 'react';
import { createContext } from "react";
import { UserAccount } from '../common/util/App.dto';

interface UserAccountContextProps {
    userAccount: UserAccount;
    setUserAccount: (user: UserAccount) => void;
}

const initialState = {
    userId: '12ff-343f3-f3-f3f-3',
    avatar: '',
    location: 'San Luis - Lima, Peru',
    isLoggedIn: true
}

export const UserAccountContext = createContext({} as UserAccountContextProps);

export const UserAccountContextProvider = (props: any) => {

    const [userAccount, setUserAccount] = React.useState<UserAccount>(
        initialState
    );

    return(
        <UserAccountContext.Provider value={{userAccount, setUserAccount}}>
            {props.children}
        </UserAccountContext.Provider>
    )
}