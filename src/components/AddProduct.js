import axios from "axios"
import React, {useState} from "react"

function AddProduct(){

    const initialValues = {

        name:"",
        description:"",
        price:0
    }

const [formValues, setFormValues] = useState(initialValues)

function handleOnChange(e) {

    setFormValues({...formValues, [e.target.name]:e.target.value})
}


function handleOnSubmit(e) {

    e.preventDefault();



    axios.post("http://localhost:1337/products", {
        name:formValues.name, 
        description:formValues.description,
        price : formValues.price
    }).then(  (res)=> {
        console.log(res.data)

    }).catch(  (err)=> {
        console.log(err)
 })


}





return(


    <>

<div class="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
      
         
     
          <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
            {/* <!-- Email Input --> */}

            <label
              for="product"
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
              class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              required
         
            />

      
            <label
                for="product"
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
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                required
            
            />

                <label
                for="Product Price"
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



            
            {/* <!-- Auth Buttton --> */}
            <button
              type="submit"
              className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Add Product
            </button>

             
          </form>
        </div>
      </div>
    </div>



    </>
)
}

export default AddProduct