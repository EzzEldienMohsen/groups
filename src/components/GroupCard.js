import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GroupCard = ({ groups }) => {

    
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap  px-8 py-10">
      {groups.map((group) => {
        return (
          <div
            data-aos="flip-down"
            data-aos-duration="2000"
            key={group.id}
            className="w-4/5 m-4 md:w-4/5 lg:w-2/5 bg-secondary  border-4 border-accent rounded-lg flex flex-col justify-evenly items-start h-[300px] text-md md:text-lg lg:text-xl  capitalize px-4"
          >
            <h1 className="motion mb-2">{group.name}</h1>
            <p className=" mb-4">{group.description}</p>
            <div className="flex flex-col justify-center items-center w-full ">
              <button className="btn btn-block text-md md:text-lg lg:text-xl bg-secondary mb-2">
                Edit
              </button>
              <button className="btn btn-block text-md md:text-lg lg:text-xl bg-accent mb-2">
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupCard;
