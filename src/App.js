import "./App.css";
import Adress from "./Component/Profile/Adress";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div>
      <div>
        <div>
          <div class="profile">
            <div class="picture">
              <ProfilePhoto />
            </div>
            <div>
              <FullName />
              <Adress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* // <div className="App">
    //   <div className="photo">
    //     <ProfilePhoto />
    //   </div>
    //   <div>
    //     <FullName />
    //     <Adress />
    //   </div>
    // </div> */
}

export default App;
