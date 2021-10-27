import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  const client = props.client
  const pet = client.find(p => p._id === id)

  const [editForm, setEditForm] = useState(pet);

  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateClient(editForm, pet._id);
    props.history.push("/");
  }

  const removePet = () => {
    props.deleteClient(pet._id);
    props.history.push("/");
  }

  return (
    <div><div>
      <form onSubmit={handleSubmit}>
        <input
          id="inputPetName"
          type="text"
          value={editForm.petName}
          name="petName"
          placeholder="pet name"
          onChange={handleChange}
        />
        <input
          id="inputImageLink"
          type="text"
          value={editForm.imageLink}
          name="imageLink"
          placeholder="image link"
          onChange={handleChange}
        />
        <input
          id="inputService"
          type="text"
          value={editForm.service}
          name="service"
          placeholder="service"
          onChange={handleChange}
        />
        <input
          id="inputSchedule"
          type="text"
          value={editForm.schedule}
          name="schedule"
          placeholder="schedule"
          onChange={handleChange}
        />
        <input
          id="inputClientsName"
          type="text"
          value={editForm.clientsName}
          name="clientsName"
          placeholder="client's name"
          onChange={handleChange}
        />
        <input
          id="inputPetNeeds"
          type="text"
          value={editForm.petNeeds}
          name="petNeeds"
          placeholder="pet needs"
          onChange={handleChange}
        />
        <input id="inputBtn" type="submit" value="Update Info" />
      </form>
    </div>
    <div className="allPetInfo">
      <div className="showNameImg">
        <h1 id="showPetName">{pet.petName}</h1>
        <img id="showImage" src={pet.imageLink} alt="" /><br />
        <button id="deleteBtn" onClick={removePet}>Delete</button>
      </div>
      <div className="petInfo">
        <div className="service">
          <h4 id="serviceTitle">Service: </h4>
          <p>{pet.service}</p>
        </div>
        <div className="schedule">
          <h4 id="scheduleTitle">Schedule: </h4>
          <p>{pet.schedule}</p>
        </div>
        <div className="clientsName">
          <h4 id="clientTitle">Client's Name: </h4>
          <p>{pet.clientsName}</p>
        </div>
        <div className="petNeeds">
          <h4 id="needsTitle">Pet Needs: </h4>
          <p>{pet.petNeeds}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Show;