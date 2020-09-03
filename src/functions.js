const calculateTips = (pool, list) => {
    //calculate total hours
    let totalHours = 0;
    Object.keys(list).map((x) => {
        return totalHours += Number(list[x]);
    }) 

    //tips per hour
    const tph = pool / totalHours;

    //new List with tip value associated with employee
    let newList = {};
    Object.keys(list).map((x) => {
        return newList[x] = Number((list[x] * tph).toFixed(2));
    })
    
    return newList
}

export default calculateTips