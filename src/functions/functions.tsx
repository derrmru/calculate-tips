
const calculateTips = (pool: number | undefined, list: {[index: string]: number | string | undefined}) => {
    //calculate total hours
    let totalHours = 0;
    Object.keys(list).map((x) => {
        return totalHours += Number(list[x]);
    }) 

    //tips per hour
    const tph = pool! / totalHours;

    //new List with tip value associated with employee
    let newList: {[index: string]: number | undefined } = {"": undefined};
    Object.keys(list).map((x) => {
        let num: any = list[x];
        return newList[x] = Number((tph * num).toFixed(2));
    })
    
    return newList
}

export default calculateTips