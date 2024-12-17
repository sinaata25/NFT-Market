export const getTopCreators=(creators)=>{
    const finalCreators=[];
    const finalResult=creators.reduce((index,currentValue)=>{
        (index[currentValue.seller]=index[currentValue.seller] || []).push(currentValue);
        return index;
    },{});
    Object.entries(finalResult).forEach((item)=>{
        const seller = item[0];
        const total=item[1]
        .map((newItem)=>Number(newItem.price))
        .reduce((preveiousValue,currentValue)=>preveiousValue+currentValue,0);
        finalCreators.push({seller,total});
    });
    return finalCreators;
}