import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getGroupsFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('groups')) || defaultState;
};
const defaultState = {
    groups : []
}
const groupsSlice = createSlice({
  name: 'groups',
  initialState: getGroupsFromLocalStore(),
  reducers: {
    addGroup:(state,action)=>{
        const {group}= action.payload;
        const check = state.groups.find((i)=>i.name===group.name)
        if(check){
            toast.warn("this group already exist")
        }else{
            state.groups.push(group);
            toast.success("Group is added Successfully")
        }
    },
    clearGroups:()=>{
        localStorage.setItem("groups",JSON.stringify(defaultState));
        toast.error("All Groups Cleared")
        return defaultState
    },
    removeGroup:(state,action)=>{
        const {groupId} = action.payload;
        state.groups.filter((i)=> i.id !== groupId);
        toast.error("Group Is Removed From Your Groups")
    },
    editGroup:(state,action)=>{
        const {group}=action.payload;
        const theGroup = state.groups.find((i)=>i.id===group.id);
        theGroup.name = group.name;
        theGroup.desc = group.desc;
        theGroup.modified = new Date();
        toast.success("the Group is edited")
    }
  }})
  export const { addGroup, clearGroups, removeGroup, editGroup } = groupsSlice.actions;
  export default groupsSlice.reducer