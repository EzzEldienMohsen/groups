import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  groupsCollection: [],
};

const getGroupsFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('groups')) || defaultState;
};

const saveGroupsToLocalStore = (state) => {
  localStorage.setItem('groups', JSON.stringify(state));
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: getGroupsFromLocalStore(),
  reducers: {
    addGroup: (state, action) => {
      const { group } = action.payload;
      const theGroup = state.groupsCollection.find((i)=>i.name===group.name)
      if(theGroup){
        toast.warning("The Group already exists")
      }else{
      state.groupsCollection.push(group);
      saveGroupsToLocalStore(state);
      toast.success('Group is added Successfully');
    }
  },
    clearGroups: () => {
      saveGroupsToLocalStore(defaultState);
      toast.error('All Groups Cleared');
      return defaultState;
    },
    removeGroup: (state, action) => {
      const { groupId } = action.payload;
      state.groupsCollection = state.groupsCollection.filter(
        (i) => i.id !== groupId
      );
      saveGroupsToLocalStore(state);
      toast.error('Group Is Removed From Your Groups');
    },
    editGroup: (state, action) => {
      const { group } = action.payload;
      const theGroup = state.groupsCollection.find((i) => i.id === group.id);
      if (theGroup) {
        theGroup.name = group.name;
        theGroup.description = group.description;
        theGroup.modified = new Date().toISOString();
        saveGroupsToLocalStore(state);
        toast.success('The Group is edited');
      }
    },
  },
});

export const { addGroup, clearGroups, removeGroup, editGroup } =
  groupsSlice.actions;
export default groupsSlice.reducer;
