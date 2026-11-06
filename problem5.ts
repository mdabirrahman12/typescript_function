function getQuizSummary(scores: number[]):{total:Number,average:number}{
    if(scores.length === 0){
        return {total: 0,average:0};
    }
    const total:number = scores.reduce((sum,num) => sum+num,0)
    const average:number = total/scores.length
    return{ total: total,
        average:average
        // isNaN(average) ? 0 :average

    }
}


//Problem-01: Battery Level Status
function getBatteryStatus(percentage:number):string {
    if(percentage>=0 && percentage<=20)
    {return"Low"}
    else if(percentage>=21 && percentage <=50){
        return"Medium"
    }
    else if(percentage>=51 && percentage <=90){
        return"High"
    }
    else if(percentage>=91 && percentage <=100){
        return"Full"
    }
}

//Problem-02: Table Booking Confirmation
function formatBookingConfirmation(booking:{name:string,guests:number,time:string}):string{

    return`${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses:number[]):number {
    if(expenses.length === 0){
        return 0;
    }
    const total:number = expenses.reduce((sum,num)=> sum+num,0)
    return total
}


//Problem-04: Traffic Light Action
function getTrafficAction(light:'red'|'yellow'|'green'):string {
    if(light ==="red"){
        return "Stop"
    }
    else if(light ==="yellow"){
        return "Slow Down"
    }
    else if(light ==="green"){
        return "Go"
    }
}


//Problem-05: Quiz Score Summary
function getQuizSummary(scores: number[]):{total:Number,average:number}{
    if(scores.length === 0){
        return {total: 0,average:0};
    }
    const total:number = scores.reduce((sum,num) => sum+num,0)
    const average:number = total/scores.length
    return{ total: total,
        average:average

    }
}



