import { nanoid } from "nanoid";

export const pages = [
    {text:"Group Forms", to:"/group-forms"},
    {text:"groups", to:"/groups"},
    {text:"posts",to:"posts"}
];
export const initialGroupValue = {
    id:nanoid(),
    name:"",
    description:"",
    createdAt:new Date().toISOString()
}