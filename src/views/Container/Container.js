import './Container.scss'
export const Container = (props) => {
    const style={
        display:"flex",
        flexDirection:"column",
        margin:"0 auto",
        background:"rgb(255,56,92)", 
        width:"100%",
        height:"30rem",
        paddingTop:"50px",
        width:"80%",
        borderRadius:"10px",
        justifyContent:"flex-start",
        marginTop:"5rem"
        
    }
    return (
        <div style={style}>
           <h1 className="text-white" style={{marginTop:"-2rem"}} >Aidez a  accueillir les refugies </h1>
          
            <div style={{border:"1px solid white",width:"10rem" ,marginLeft:"15rem"}} >
                <a href="#" style={{color:"white"}}  >En savoir plus</a>
               
            </div>
            
          
          
           
        </div>
        
    )
}