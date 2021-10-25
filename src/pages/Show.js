function Show(props) {
  const id = props.match.params.id
  const client = props.client
  const pet = client.find(p => p._id === id)

  return (
    <div className="petInfo">
      <h1 id="showPetName">{pet.petName}</h1>
      <img id="showImage" src={pet.imageLink} alt="" />
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
    </div>
  )
}

export default Show;