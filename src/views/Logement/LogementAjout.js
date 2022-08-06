import React, { useEffect } from "react"
export const LogementAjout = () => {
    const style={
        backgroundColor:"white",
    }
    const[image,setImage]=React.useState({preview:'',data:''})
    const[status,setStatus]=React.useState('')
    const [test,setTest]=React.useState(null)
    const handleSubmit = async(e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file',image.data)
        const response = await fetch('http://localhost:5000/upload',{
            method:'POST',
            body:formData
        })
        if(response) setStatus(response.statusText)
    }
    const handleChange = (e) => {
        setImage({
            preview:URL.createObjectURL(e.target.files[0]),
            data:e.target.files[0]
        })
    }
   
    return (
        <div style={style}>
              <h1>LogementAjout</h1>
              <form onSubmit={handleSubmit} >
                <input type ="file" name="file"   onChange={handleChange}/>
                <button type="submit">Upload</button>
              
        {status && <h1>{status}</h1>}
        </form>
        {image.preview && <img src={image.preview} alt="preview"/>}
        </div>
    )
}