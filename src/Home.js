import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return(
        
        <div className= "Home">
            <main>
        <h1 className= "Title">Doggy daycare</h1>
        <p className= "SubTitle">Welcome to Doggy daycare,<br /> Go to dogs to continue to our gallery</p>
          <div>
              <Link className= "Button" to="/register">Go to dogs
              
              </Link>
            
          </div>
          </main>
        </div>
        
    )
}
export default Home;