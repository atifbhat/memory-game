const randomizeArr=(arr_old)=>{
   const arr=[...arr_old];
    const shuffled_arr=[];
   const size= arr.length;
   
   for(let i=0; i<size;i++){
    const random_idx= Math.floor(Math.random()*arr.length);
    shuffled_arr.push(arr[random_idx]);
    arr.splice(random_idx,1);
   }
   
   
    return shuffled_arr;
}
export {randomizeArr};