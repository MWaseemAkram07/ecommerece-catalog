import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
   <div>
     <Provider store={store}>
        <Navbar />
        <Hero />
     </Provider>
   </div>
  )
}