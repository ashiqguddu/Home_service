const server= 'http://apps.codebetter.in:8082'

export default{
    UserListaxois:`${server}/quickserve/user/list`,
    serviceType:`${server}/quickserve/serviceType/save`,
    serviceList:`${server}/quickserve/serviceType/list`,
    USER_REGISTRATION:`${server}/quickserve/user/save`,
    USER_LOGIN:`${server}/quickserve/auth/login`,
    
    EmplyeeList:`${server}/quickserve/employee/list`,
    EmplyeSave : `${server}/quickserve/employee/save`,
     
    DELETE_SERVICE:`${server}/quickserve/serviceType/delete/`,

    // categore 
    CategoryItems:`${server}/quickserve/item/save`,
    CategoryList:`${server}/quickserve/item/listAll`,
    DELETE_CATEGORY:`${server}/quickserve/item/delete/`,

    // card
    AddToCard:`${server}/quickserve//item/addToCart/`,

    //   Booking
    Save_BOOking:`${server}/quickserve/booking/save`,
    List_BookingOfUser:`${server}/quickserve/booking/list/myBookings/`,
    List_BookingOFAdmin:`${server}/quickserve/booking/admin/bookingReq/list`,
    Cancel_Boooking_user :`${server}/quickserve/booking/user/booking/cancel/`

}