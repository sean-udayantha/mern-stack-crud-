import GuideRegister from "./components/GuideRegister";
import EditGuideDetails from "./components/EditGuideDetails"
import AllGuideDetails from "./components/AllGuide";
import GuideUser from "./components/GuideUser";
import OneGuide from "./components/OneGuide";
import MyGuideProfile from "./components/MyGuideProfile";

import {BrowserRouter as Router, Route} from "react-router-dom"
 
function App() {
  return (
    <Router>
    <div> 

      <Route path="/guide/register" exact component={GuideRegister} ></Route>
      <Route path="/guide/edit/:id" exact component={EditGuideDetails} ></Route>
      <Route path="/guide/guide" exact component={AllGuideDetails}></Route>
      <Route path ="/guide" exact component={GuideUser} ></Route>
      <Route path ="/guide/details/:id" exact component={OneGuide}></Route>
      <Route path ="/guide/myaccount/:id" exact component ={MyGuideProfile}></Route>
    </div>
    </Router>
    
    
  );
}
 
export default App;