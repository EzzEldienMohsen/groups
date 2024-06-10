import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FormRow = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeHolder,
  height,
  min,
  textColor,
}) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className={`flex flex-col justify-center items-start w-[100%] `}
    >
      <label
        className={`my-4 capitalize text-lg md:text-xl lg:text-2xl text-[${textColor}]`}
        htmlFor={name}
      >
        {label || name}
      </label>
      {type === 'textarea' ? (
        <textarea
          required
          name={name}
          id={name}
          value={value}
          placeholder={placeHolder}
          onChange={handleChange}
          min={min || 1}
          style={{ height: height || 'auto' }}
          className={`py-1 px-4 border-sky-400 border-2 rounded-md w-[100%] `}
        />
      ) : (
        <input
          required
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeHolder}
          onChange={handleChange}
          min={min || 1}
          style={{ height: height || 'auto' }}
          className={`py-1 px-4 border-sky-400 border-2 rounded-md w-[100%] `}
        />
      )}
    </div>
  );
};

export default FormRow;
