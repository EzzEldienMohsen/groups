import { nanoid } from "nanoid";

export const pages = [
    {text:"Group Forms", to:"/"},
    {text:"groups", to:"/groups"},
    
];
export const initialGroupValue = {
    id:nanoid(),
    name:"",
    description:"",
    createdAt:new Date().toISOString()
}