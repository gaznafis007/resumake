export const getData = async (endpoint) =>{
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseURL}${endpoint}`);
    const data = await res.json();
    return data;
}