import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from "../pages/About"
import ContactUs from "../pages/ContactUs";

function Home(props){
    const [client, setClient] = useState(null);

    const URL = "https://happytail-backend.herokuapp.com/home/";

    const getClient = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setClient(data);
    };

    const createClient = async (pet) => {
        // make post request to create people
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(pet),
        });
        // update list of people
        getClient();
      };

      useEffect(() => getClient(), []);
    
      return (
        <main>
      <Switch>
        <Route exact path="/">
          <Index client={client} createClient={createClient} />
        </Route>
        <Route
          path="/home/:id"
          render={(rp) => (
            <Show
              {...rp}
            />
          )}
        />
        <About />
        <ContactUs />
      </Switch>
    </main>
    );
  } 
  
  export default Home;