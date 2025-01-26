import './App.css'
import Header from "./header.jsx";
import {Timeline} from "./timeline.jsx";
import {Footer} from "./footer.jsx";

function App() {
  return (
      <div>

          <div className={"flex flex-col justify-between h-screen mb-20"}>
              <Header/>
              <Timeline/>
          </div>

          <Footer/>
      </div>
  )
}

export default App
