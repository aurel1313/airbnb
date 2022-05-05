import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation, useParams } from "react-router-dom";
import data3 from "../../Data/data3.json";
import './List.scss';
export const List =()=>{
 
  let img ="https://loremflickr.com/g/320/240/house?lock=30976"
  const [data, setData] = React.useState(data3);
  const {id}=useParams();
  let location = useLocation();
 console.log(location.pathname)
 console.log(location.pathname=='/logement/logementDetail/'+id)
  /*const fetchData = () => {
    setTimeout(() => {
      data2.map((item, index) => {
        setData([...data, item]);
      });
     
    }, 500);
  };*/
const fetchData2 = () => {
  setTimeout(() => {
    data3.records.map((item, index) => {
      
      setData([...data, item]);
    });
  }, 500);
};


    return (
     <div >
            <h1>Liste des logements</h1>
        
       <div  >
       
         <InfiniteScroll dataLength={data3.records.length}  totalRecord={5} next={fetchData2} hasMore={true}
   className="infinite"  >
         
         
          {data.records.map((item, index) => (
            
            <div className="items" key={index}>
              <img src={item.fields.xl_picture_url} width="300" height="300" alt="miss photo"/>
              <Link to={`/logement/logementDetail/${item.fields.id}`}>voir plus</Link>
              </div>
              
          ))}
         </InfiniteScroll>
         
       </div>
       
     </div>
 )      
}
     