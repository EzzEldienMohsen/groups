import React from 'react';
import { useDispatch } from 'react-redux';
import { addGroup } from '../features/groups/GroupSlice';
import FormRow from '../subComponents/FormRow';
import { initialGroupValue } from '../assets';
import { nanoid } from 'nanoid';

const GroupForm = () => {
  const [group, setGroup] = React.useState({
    ...initialGroupValue,
    id: nanoid(),
  });
  const dispatch = useDispatch();

  const addAnotherGroup = (newGroup) => {
    dispatch(addGroup({ group: newGroup }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup({ ...group, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    addAnotherGroup(group);
    setGroup({ ...initialGroupValue, id: nanoid() }); // Reset the form
  };

  return (
    <form onSubmit={handleSubmission} className="px-6 py-10 ">
      <FormRow
        name="name"
        type="text"
        value={group.name}
        handleChange={handleChange}
        placeHolder="Group Name"
        textColor="text-primary"
      />
      <FormRow
        name="description"
        type="textarea"
        value={group.description}
        handleChange={handleChange}
        placeHolder="Group Description"
        textColor="text-primary"
        height="150px" 
      />
      <button
        type="submit"
        className="btn my-8 btn-block text-secondary bg-primary motion text-lg md:text-xl lg:text-2xl"
      >
        Submit
      </button>
    </form>
  );
};

export default GroupForm;
