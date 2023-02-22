import { useState } from "react";
import Home from "./screens/Home";
import Notification from "./screens/Notification";

export default function App() {
  let [page, setPage] = useState('Home')
  if (page == 'Home') return (<Home setPage={setPage}/>)
  if (page == 'Notification') return (<Notification setPage={setPage}/>)
}
