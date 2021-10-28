import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
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
            <h1 id="title">Happy Tail</h1>
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
        </div>
    );
}

export default Home;