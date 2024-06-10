import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editGroup } from '../features/groups/GroupSlice';
import { FormRow } from '../subComponents';

const EditGroupForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.groupsCollection);
  const groupToEdit = groups.find((group) => group.id === id);
const navigate = useNavigate();
  const [group, setGroup] = useState(groupToEdit || {});

  useEffect(() => {
    if (groupToEdit) {
      setGroup(groupToEdit);
    }
  }, [groupToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup({ ...group, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(editGroup({ group }));
    navigate('/groups');
  };

  return (
    <form onSubmit={handleSubmission} className="px-6 py-10">
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
        type="text"
        value={group.description}
        handleChange={handleChange}
        placeHolder="Group Description"
        textColor="text-primary"
      />
      <button
        type="submit"
        className="btn my-8 btn-block text-secondary bg-primary motion"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditGroupForm;
