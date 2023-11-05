import { useDispatch } from "react-redux";
import  {catogoryslice} from '../../redux/slicecategory'
import {  useRef } from "react";
import Webservice from "../../axios/Webservice";
import URL from '../../axios/ApiUrls'
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Category = () => {

    const dispatch = useDispatch()
 
    const itemNamebox = useRef();
    const serviceTypeIdbox = useRef();
    const descriptionbox = useRef();
    const pricebox = useRef();
    const itemImagebox = useRef();

    const categoryData = useSelector(state => state.categorystore.value)
    // console.log(categoryData)

    const handleSubmit =async (event) => {
        event.preventDefault();

         

        const frmdata =new  FormData()
        frmdata.append('itemName',itemNamebox.current.value)
        frmdata.append('serviceTypeId',serviceTypeIdbox.current.value)
        frmdata.append('description',descriptionbox.current.value)
        frmdata.append('price', pricebox.current.value)
        frmdata.append('itemImage',itemImagebox.current.files[0])

        // console.log(frmdata)


       

    

 
        const response = await Webservice.postApiCall(URL.CategoryItems, frmdata);

        // console.log("response is : ", response);

        if (response.data.status === true) {
          toast.success("Data added successfully");
           event.target.reset()

        } else {
          toast.error("Data can not be submited");
        }
    

        
    }

    // useEffect(()=>{

        const fatchdata  = async () =>{

            const response = await Webservice.getApiCall(URL.CategoryList)

            if(response.data.status === true){
                
               dispatch(catogoryslice(response.data.data))
            }


        }
        fatchdata()
    // },[])

    var deletecat = async (id)=>{
        // console.log(id)
        var response = await Webservice.deleteApiCall(URL.DELETE_CATEGORY+id);
        console.log(response)

        // console.log(response)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Item Name :</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" ref={itemNamebox} placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Item ID :</label>
                    <input type="number" className="form-control" id="exampleFormControlInput2" ref={serviceTypeIdbox} placeholder="Enter Item ID" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" ref={descriptionbox} placeholder="Enter Description of the item" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput3">Item Price :</label>
                    <input type="number" className="form-control" id="exampleFormControlInput3" ref={pricebox} placeholder="Item Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Select Image of item</label>
                    <input type="file" className="form-control-file" ref={itemImagebox} id="exampleFormControlFile1" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block mb-2" >Submit</button>
            </form>
            <table className="table mt-3 text-center">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Category Name</th>
                        <th>Service Type ID</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Item Image</th>
                    </tr>
                </thead>
                <tbody>
    {categoryData.map((ob, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{ob.itemName}</td>
            <td>{ob.serviceTypeId}</td>
            <td>{ob.description}</td>
            <td>{ob.price}</td>
            <td><img src={ob.itemImage} width='150px' height='150px'></img></td>
            <td><button onClick={()=>deletecat(ob.id)} className="btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg></button></td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    );
};

export default Category;

