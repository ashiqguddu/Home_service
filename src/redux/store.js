import { configureStore } from "@reduxjs/toolkit";
import userList from './sliceuserlist'
import setService from './sliceservice'
import loginstatus from './slicelogin'
import  catogoryslice  from "./slicecategory";
import  EmployeSlice from "./sliceemploye";
import Cart from './slice-card'
import BookingList from './slice-booking_list_user'
import id from './slice-store-Id'
import bookingUser from './slice-bookingUser'


const store = configureStore({
  reducer: {
    usList: userList,
    loginstatus: loginstatus,
    id : id,
    categorystore: catogoryslice,
    serviceTypestate: setService,
    employestate :  EmployeSlice,
    Carts : Cart ,
    booking_list_admin : BookingList,
    booking: bookingUser,

    
  },
});


// store.subscribe(()=>{
//     console.log("state changed",store.getState())
// })
export default store ;