import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

export const UserContext = createContext<
  {userInfo: UserState, setUserInfo: Dispatch<SetStateAction<UserState>>} | undefined
>(undefined);

interface UserState{
  name: string,
  role: string
  iconId: number,
  backgroudColor: string
}

export const UserProvider = ({children}: {children: ReactNode}) => {
  const init: UserState = {
    name: "野々山超太郎",
    role: "編集者リーダー",
    iconId: 44,
    backgroudColor: "#f26666"
  }
  const [userInfo, setUserInfo] = useState(init);
  return(
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  )
}