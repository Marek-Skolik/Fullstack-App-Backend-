export const API_URL = process.env.NODE_ENV === 'mongodb+srv://NewUser:Marek12344321@cluster1.zgpws1w.mongodb.net/adDB?retryWrites=true&w=majority' ? '' : "http://localhost:8000";

export const IMGS_URL = (process.env.NODE_ENV === 'mongodb+srv://NewUser:Marek12344321@cluster1.zgpws1w.mongodb.net/adDB?retryWrites=true&w=majority') ? '/uploads/' : 'http://localhost:8000/uploads/';