function calculateWeeklyTotal(expenses:number[]):number {
    if(expenses.length === 0){
        return 0;
    }
    const total:number = expenses.reduce((sum,num)=> sum+num,0)
    return total
}

