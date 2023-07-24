
import React, { useRef } from "react";
import "./App.css";
import { Auth } from "./component/Auth";
import { useState } from "react";
import Cookies from "universal-cookie";
import { Chat } from "./component/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState(null);
  const   roomInputRef=useRef(null);
const signUserOut =async()=>{
  await signOut(auth);
  cookies.remove("auth-token")
  setIsAuth(false);
  setroom(null);
}

  if (!isAuth) {
    return (
      <div className="App">
        <Auth  setIsAuth={setIsAuth}/>
      </div>

    );
  }
  return (
    <>
      {room?<Chat room={room}/>:
      <div className="room">
        <label>Enter Room name</label>
        <input ref={roomInputRef}/>
        <button onClick={()=>setroom(roomInputRef.current.value)}>Enter Chat</button>
      </div>
}
<div className="sign-out">
  <button onClick={signUserOut}>Sign out</button>
</div>
    </>
  
  );
}

export default App;
