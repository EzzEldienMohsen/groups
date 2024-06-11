import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import {removeGroup} from "../features/groups/GroupSlice"
import { Link } from 'react-router-dom';

const GroupCard = ({ groups }) => {
const dispatch =useDispatch();
const removeGroupFromList = (groupId)=>{
  dispatch(removeGroup({groupId}))
}
    
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap pt-10">
      {groups.map((group) => {
        return (
          <div
            data-aos="flip-down"
            data-aos-duration="2000"
            key={group.id}
            className="w-4/5 m-4 md:w-4/5 lg:w-2/5 bg-secondary  border-4 border-accent rounded-lg flex flex-col justify-evenly items-start h-[300px]   capitalize px-4"
          >
            <h1 className="motion mb-2 text-lg md:text-xl lg:text-2xl tracking-wide shadow-sm">
              {group.name}
            </h1>
            <p className=" mb-4 text-md md:text-lg lg:text-xl">
              {group.description}
            </p>
            <p className=" mb-4 text-md md:text-lg lg:text-xl">
              created at: {group.createdAt}
            </p>
           
            <div className="flex flex-col justify-center items-center w-full ">
              <Link
                to={`/edit-group/${group.id}`}
                className="btn btn-block text-md md:text-lg lg:text-xl bg-secondary mb-2"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  removeGroupFromList(group.id);
                }}
                className="btn btn-block text-md md:text-lg lg:text-xl bg-accent mb-2"
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupCard;
