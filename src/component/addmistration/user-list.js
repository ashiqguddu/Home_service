
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Webservice from "../../axios/Webservice";
import { useSelector } from "react-redux";
import URL from "../../axios/ApiUrls";
import { userlist } from "../../redux/sliceuserlist";

function UserList() {
  const dispatch = useDispatch();
  var userdata = useSelector(state => state.usList.value);
//  console.log('user data is :',userdata)
  useEffect(() => {
    
    const fetchData = async () => {
    

      const response = await Webservice.getApiCall(URL.UserListaxois);
    //   const result = response.data;

      if (response.data.status === true) {
        // console.log(response.data.data)
        dispatch(userlist(response.data.data));
        
      } else {
        alert("Data not found");
      }
    };

    fetchData();
  },[]);

   
  
//   console.log(userdata)
  // console.log("the data is here ", userdata);

  return (
    <div className="container-fluid">
      <div className="">
        <h1 className="text-center mt-3">Userlist</h1>
      </div>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>User ID</th>
            <th>Email</th>
            <th>Number</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            userdata.map((ob, index) => 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ob.name}</td>
                <td>{ob.id}</td>
                <td>{ob.email}</td>
                <td>{ob.mobile}</td>
                <td>{ob.city}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
