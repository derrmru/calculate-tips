const calculateComplexTips = (commit: {[index: string]: {[index: string]: string | number}}, 
    pool: string | number,
    staffSplits: {[index: string]: string | number}
    ) => {
        
        const finalCommit = commit;
        const categories = Object.keys(staffSplits);

        categories.map((x) => {
            let percentage = staffSplits[x];
            let categoryTipPool = Number(percentage) * (Number(pool) / 100)
            //console.log('percentage of ' + x + ': ' + percentage)

            let totalHours = 0;
            Object.keys(commit[x]).map((y) => {
                return totalHours += Number(commit[x][y])
            })

            let perHour = categoryTipPool / totalHours;

            Object.keys(finalCommit[x]).map((z) => {
                return finalCommit[x][z] = (Number(finalCommit[x][z]) * perHour).toFixed(2);
            })
            
            return console.log('category ' + x + ' complete')
        })

        return finalCommit;
}

export default calculateComplexTips