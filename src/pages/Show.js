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
    <div className="petInfo">
      <h1 id="showPetName">{pet.petName}</h1>
      <img id="showImage" src={pet.imageLink} alt="" />
      <button id="deleteBtn" onClick={removePet}>Delete</button>
      <div class="service">
        <h4>Service: </h4>
        <p>{pet.service}</p>
      </div>
      <div class="schedule">
        <h4>Schedule: </h4>
        <p>{pet.schedule}</p>
      </div>
      <div class="clientsName">
        <h4>Client's Name: </h4>
        <p>{pet.clientsName}</p>
      </div>
      <div class="petNeeds">
        <h4>Pet Needs: </h4>
        <p>{pet.petNeeds}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={editForm.petName}
        name="petName"
        placeholder="pet name"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.imageLink}
        name="imageLink"
        placeholder="image link"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.service}
        name="service"
        placeholder="service"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.schedule}
        name="schedule"
        placeholder="schedule"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.clientsName}
        name="clientsName"
        placeholder="client's name"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.petNeeds}
        name="petNeeds"
        placeholder="pet needs"
        onChange={handleChange}
        />
        <input type="submit" value="Update Info" />
      </form>
    </div>
  );
}

export default Show;