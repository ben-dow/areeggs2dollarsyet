import './App.css'
import Header from "./header.jsx";
import {Timeline} from "./timeline.jsx";
import {Footer} from "./footer.jsx";

function App() {
  return (
      <div className={"bg-slate-100"}>
          <div className={"pb-52"}>
              <Header/>
              <Timeline/>
          </div>
          <Footer/>
      </div>
  )
}

export default App
