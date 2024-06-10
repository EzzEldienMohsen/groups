import React from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GroupCard } from '../components';
import { useDispatch } from 'react-redux';
import {clearGroups} from "../features/groups/GroupSlice"

const GroupList = () => {
  const { groupsCollection: groups } = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const clearTheList = ()=>{
    dispatch(clearGroups())
  }
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  if (groups.length === 0) {
    return (
      <div
        data-aos="flip-up"
        data-aos-duration="2000"
        className="w-full flex justify-center items-center "
      >
        <div className="border-2 border-secondary mt-8 w-5/6 mx-8 h-full p-6 lg:py-16 rounded-lg flex justify-center items-center  bg-accent text-md md:text-xl lg:text-2xl motion capitalize px-4 text-center">
          Please add Groups First to be able to see them
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col px-8">
        <GroupCard groups={groups} />
        <button onClick={clearTheList} className="btn btn-block bg-primary my-8 motion capitalize">clear list</button>
      </div>
    );
  }
};

export default GroupList;
