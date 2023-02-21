import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Notification from "./screens/Notification";

export default function App() {
  return (
    <NavigationContainer>
      <Notification/>
      {/* <Home/>       */}
    </NavigationContainer>
  );
}
