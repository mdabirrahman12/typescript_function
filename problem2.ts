function formatBookingConfirmation(booking:{name:string,guests:number,time:string}):string{

    return`${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}`
}
