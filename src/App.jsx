import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Container1 from "./component/Container1"
import DisplayCounter from './component/DisplayCounter';
import Controls from './component/Controls';
import PrivacyMessage from './component/PrivacyMessage';
import {useSelector} from "react-redux";


function App() {

  const privacy=useSelector(store=>store.Privacy)
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container1 >

        <Header></Header>
        <div className="col-lg-6 mx-auto">
          { privacy?<PrivacyMessage/>:<DisplayCounter></DisplayCounter>}
          <Controls></Controls>

          
        </div>
        </Container1>
      </div></>


  )
}

export default App
