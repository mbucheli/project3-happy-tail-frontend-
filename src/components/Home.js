import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Home(props) {
    const [client, setClient] = useState(null);

    const URL = "https://happytail-backend.herokuapp.com/home/";

    const getClient = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setClient(data);
    };

    const createClient = async (pet) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(pet),
        });
        getClient();
    };

    const updateClient = async (pet, id) => {
        // make put request to create people
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(pet),
        });
        getClient();
      }
    
      const deleteClient = async id => {
        await fetch(URL + id, {
          method: "DELETE",
        });
        getClient();
      }

    useEffect(() => getClient(), []);

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Index client={client} createClient={createClient} />
                </Route>
                <Route
                    path="/home/:id"
                    render={(rp) => (
                        <Show
                        client={client}
                        updateClient={updateClient}
                        deleteClient={deleteClient}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default Home;