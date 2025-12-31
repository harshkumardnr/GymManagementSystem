import axios from "axios";

const getMonthlyJoined =  async()=>{
    try{
        const response = await axios.get('http://localhost:4000/members/monthly-member',{withCredentials:true});
        // console.log(response);
        return response.data;

    }catch(error){
        console.error("Error Fetching Data: ",error);
        throw error;
    }
}
const threeDayExpire=async()=>{
    try{
        const response=await axios.get('http://localhost:4000/members/within-3-days-expiring',{withCredentials:true});
        return response.data;
    }catch(error){
        console.log('Error Fetching Data: ',error);
    }
}

const fourToSevenDayExpire = async()=>{
    try{
        const response=await axios.get('http://localhost:4000/members/within-4-7-days-expiring',{withCredentials:true});
        return response.data;
    }catch(error){
        console.log('Error Fetching Data: ',error);
    }
}
const expired = async()=>{
    try{
        const response=await axios.get('http://localhost:4000/members/expired-member',{withCredentials:true});
        return response.data;
    }catch(error){
        console.log('Error Fetching Data: ',error);
    }
}
const inActiveMembers = async()=>{
    try{
        const response=await axios.get('http://localhost:4000/members/inactive-member',{withCredentials:true});
        return response.data;
    }catch(error){
        console.log('Error Fetching Data: ',error);
    }
}
export {getMonthlyJoined,threeDayExpire,fourToSevenDayExpire,expired,inActiveMembers};