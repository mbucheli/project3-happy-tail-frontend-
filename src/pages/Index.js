import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props){
  const [ newForm, setNewForm ] = useState({
    petName: "",
    imageLink: "",
    service: "",
    schedule: "",
    clientsName: "",
    petNeeds: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createClient(newForm);
    setNewForm({
      petName: "",
    imageLink: "",
    service: "",
    schedule: "",
    clientsName: "",
    petNeeds: ""
    });
  };

    const loaded = () => {
        return props.client.map((pet) => (
          <div key={pet._id} className="client">
            <Link to={`/home/${pet._id}`}><img id="image" src={pet.imageLink} alt={pet.petName} /><h1 id="pet" >{pet.petName}</h1></Link>
          </div>
        ));
      };
    
      const loading = () => {
        return <h1>Loading...</h1>;
      };
    
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.petName}
              name="petName"
              placeholder="pet name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.imageLink}
              name="imageLink"
              placeholder="image link"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.service}
              name="service"
              placeholder="service"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.schedule}
              name="schedule"
              placeholder="schedule"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.clientsName}
              name="clientsName"
              placeholder="client name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.petNeeds}
              name="petNeeds"
              placeholder="pet needs"
              onChange={handleChange}
            />
            <input type="submit" value="Create Client" />
          </form>
          {props.client ? loaded() : loading()}
        </section>
      );
    } 
  
  export default Index;