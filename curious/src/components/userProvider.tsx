import { UserContext } from '@/contexts/userContext';
import { User } from '@/types/props';
import React, { useState, FC } from 'react';


const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
