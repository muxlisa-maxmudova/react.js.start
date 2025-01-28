import UserProfile from "./Hooks/Prop_drilling/UserProfile.jsx";
import {UserProvider} from "./Hooks/Prop_drilling/UserContext.jsx";
import UserUpdate from "./Hooks/Prop_drilling/UserUpdate.jsx";
const App = () => {

    return (
        <main>
           <UserProvider>
               <UserProfile/>
               <UserUpdate/>
           </UserProvider>
        </main>
    )
}
export default App























