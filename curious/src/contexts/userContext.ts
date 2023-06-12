import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  bio: string;
  followers: number[];
  followings: number[];
}

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
