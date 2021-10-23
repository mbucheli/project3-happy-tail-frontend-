import { Link } from "react-router-dom"

function Index(props){
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
    
      return props.client ? loaded() : loading();
    } 
  
  export default Index;