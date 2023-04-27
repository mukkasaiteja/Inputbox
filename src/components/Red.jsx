const red=(data ={name:'saiteja'},action)=>{
    if (action.type === 'name') {
        return{
            name:action.username
        }
        
    }
return data;
}
export default red;