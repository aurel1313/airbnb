
import { default as React, useEffect } from "react";
import { useFileUpload } from 'use-file-upload'
export const Upload = () => {
    const [file, selectFile] = useFileUpload();
 
   useEffect(() => {
    if(file) {
      var img = {
        src : file,
        name : file.name
      };
      var img = JSON.stringify(img);
      var pret="pret";
      var pretId=localStorage.length+1;
      localStorage[pret+pretId]=img;
    }

   }, [file]);
   const data = JSON.parse(localStorage.getItem('pret4'));
   //console.log(data.src[0]);
   
   const blob = new Blob([data.src[0]], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    //console.log(url);
   const data2=JSON.parse(localStorage.getItem('test'));
  console.log(data2);
   
  
   return(
        <div>
          <form action="/" method="post">
            <button type="submit"
        onClick={() => {
          selectFile({multiple:true},(files)=>{
            files.map(({ source, name, size, file }) =>{
              //console.log({ source, name, size, file })
            

              //localStorage.setItem("test", JSON.stringify({ source, name, size, file }));
              
            })
          })
         
        }}
      >
        Click to Upload
      </button>
      
      </form>
        <a href={data2.source} >test blob</a>
          {/*data.src[0].source*/} 
        </div>
    )
}