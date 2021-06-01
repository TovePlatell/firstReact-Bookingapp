import axios from "axios"
import React, {useState} from "react"

function AddProduct(){

    const initialValues = {

        name:"",
        description:"",
        price:0
    }

const [formValues, setFormValues] = useState(initialValues);
const [fileData, setFileData] = useState();
const [message, setMessage]= useState("")
//const admin = localStorage.getItem("role")

function handleOnChange(e) {

    setFormValues({...formValues, [e.target.name]:e.target.value})
}

function handleOnChangePicture(e) {

  setFileData(e.target.files[0])

  
}

async function handleOnSubmit(e) {

    e.preventDefault();

// post request på produkerna lagrar information

    await axios.post("https://bookingtove.herokuapp.com/products", {
        name:formValues.name, 
        description:formValues.description,
        price : formValues.price
    }).then(  
    
      // response från data/postrequest
      async (res)=> {
        console.log(res.data)

        // krävs för att ladda upp bilden
      const data = new FormData();
      data.append("files", fileData)

        
      // referar att bilden ska hamna i product, collection
      data.append("ref", "product")
      data.append("refId", res.data.id)
      
      //field är filnamn i strapi
      data.append("field", "img")

      await axios.post("https://bookingtove.herokuapp.com/upload", data)
      .then((image)=> console.log(image))
      .catch ((error) => console.log(error))
      
      setMessage("Product has been added")

         console.log("product", setMessage)
    }).catch(  (err)=> {
        console.log(err)
        
 })


        
}


return(


    <>

    

<p className="text-lg font-bold text-center text-grey">Add products</p>

<div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
      
         
     
          <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
            {/* <!-- Email Input --> */}
            <h1 className="pt-3 pb-6 ml-64 text-green-600">{message}</h1>
            <label
              htmlFor="product"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={formValues.name}
              placeholder="productname"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              required
         
            />

      
            <label
                htmlFor="product"
                className="block text-xs font-semibold text-gray-600 uppercase"
                >
                Product Description
                </label>
                <input
                type="text"
                name="description"
                onChange={handleOnChange}
                value={formValues.description}
                placeholder="description"
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                required
            
            />

<label
                htmlFor="product"
                className="block text-xs font-semibold text-gray-600 uppercase"
                >
                Product Location
                </label>
                <input
                type="text"
                name="location"
                onChange={handleOnChange}
                value={formValues.location}
                placeholder="location"
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                required
            
            />
                <label
                htmlFor="Product Price"
                className="block text-xs font-semibold text-gray-600 uppercase"
                >
                Product price
                </label>
                <input
                type="number"
                name="price"
                onChange={handleOnChange}
                value={formValues.price}
                placeholder="price"
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                required
            
            />


              <input className="mt-4 mb-4" type="file" name="file" onChange={handleOnChangePicture}/>
            
            {/* <!-- Auth Buttton --> */}
            <button
              type="submit"
              className="mt-8 text-center text-md sm:flex sm:flex-wrap sm:mb-4"
            >
              ADD
            </button>

             
          </form>
        </div>
      </div>
    </div>



    </>
)
}

export default AddProduct