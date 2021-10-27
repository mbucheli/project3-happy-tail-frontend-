import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
  const [newForm, setNewForm] = useState({
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
        <Link to={`/home/${pet._id}`}><img id="image" src={pet.imageLink} alt={pet.petName} /></Link>
        <h2 id="pet">{pet.petName}</h2>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <input
          id="inputPetName"
          type="text"
          value={newForm.petName}
          name="petName"
          placeholder="pet name"
          onChange={handleChange}
        />
        <input
          id="inputImageLink"
          type="text"
          value={newForm.imageLink}
          name="imageLink"
          placeholder="image link"
          onChange={handleChange}
        />
        <input
          id="inputService"
          type="text"
          value={newForm.service}
          name="service"
          placeholder="service"
          onChange={handleChange}
        />
        <input
          id="inputSchedule"
          type="text"
          value={newForm.schedule}
          name="schedule"
          placeholder="schedule"
          onChange={handleChange}
        />
        <input
          id="inputClientsName"
          type="text"
          value={newForm.clientsName}
          name="clientsName"
          placeholder="client name"
          onChange={handleChange}
        />
        <input
          id="inputPetNeeds"
          type="text"
          value={newForm.petNeeds}
          name="petNeeds"
          placeholder="pet needs"
          onChange={handleChange}
        />
        <input id="inputBtn" type="submit" value="Create Client" />
      </form>
      {props.client ? loaded() : loading()}
    </div>
  );
}

export default Index;