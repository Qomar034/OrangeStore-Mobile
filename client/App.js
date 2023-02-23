import { useState } from "react";
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import Sales from "./screens/Sales";
import User from "./screens/User";

export default function App() {
  let [page, setPage] = useState('Home')
  
  if (page == 'Home') return (<Home setPage={setPage}/>)
  else if (page == 'Notification') return (<Notification setPage={setPage}/>)
  else if (page == 'User') return (<User setPage={setPage}/>)
  else if (page == 'Chat') return (<Chat setPage={setPage}/>)
  else if (page == 'Sales') return (<Sales setPage={setPage}/>)
  else return (<Home setPage={setPage}/>)
}
