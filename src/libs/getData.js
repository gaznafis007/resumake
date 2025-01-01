export const getData = async (endpoint) =>{
    try{
    const baseURL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
    const res = await fetch(`${baseURL}${endpoint}`);
    const data = await res.json();
    return data;
    }catch(error){
        console.log(error);
        return error?.message
    }
}