import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import data3 from "../../Data/data3.json";
import './List.scss';
export const List =()=>{
 
  
  const [data, setData] = React.useState(data3);
  const {id}=useParams();
  let location = useLocation();

 const json = JSON.parse(localStorage.getItem('user'));
 console.log(json?.user)
    return (
     <div >
            <h1>Liste des logements</h1>
        
       <div  >
       
         
         
         
          {data.records.map((item, index) => (
            
            <div className="items" key={index}>
              <img src={item.fields.xl_picture_url} width="300" height="300" alt="miss photo" className="photo"/>
                <div>
                    <Link to={`/logement/logementDetail/${item.fields.id}`}>voir plus</Link>
                </div>
              </div>
              
          ))}
        {json && json.user.email=="aurelienfabre439@gmail.com" && <Link to="/logement/ajouterLogement" className="ajout">Ajouter un logement</Link>}
         
       </div>
       
     </div>
 )      
}
     