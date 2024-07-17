import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Chat from './components/chat/chat';
import Detail from './components/detail/detail';
import List from './components/list/List';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';

function App() {
  const { CurrentUser, isLoading, fetchUserInfo, setLoading } = useUserStore(); // Destructure setLoading

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        setLoading(false); // Update loading state when user logs out
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo, setLoading]);

  console.log(CurrentUser);

  if (isLoading) return <div className='loading'>Loading...</div>;

  return (
    <div className="App">
      {CurrentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
