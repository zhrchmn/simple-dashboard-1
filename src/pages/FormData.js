import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../component/GlobalContext";

const FormData = (props) => {
  let { IdData } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    input,
    setInput,
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  } = state;

  const {
    handleDelete,
    handleEdit,
    handleInput,
    handleSubmit,
    rupiah,
    handleText,
  } = handleFunction;

  useEffect(() => {
    if (IdData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
        .then((res) => {
          let data = res.data;
          //  console.log(data)
          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        });
    }
  }, []);
  // console.log(data)

  return (
    <>
      {/* form data */}
      <div className="grid w-8/12 ml-28">
        <div className="border-green-600">
          <p className="font-bold text-2xl"> Create Job </p>
          <br />
          <form onSubmit={handleSubmit}>
            <label for="name">Title</label>
            <input
              onChange={handleInput}
              name="title"
              value={input.title}
              type="string"
              required="required"
              placeholder="title..."
              className="bg-gray-300 border border-white-300 
            text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
            />
            <br />
            <div className="m-auto">
              <label for="name">Job Description</label>
              <br />
              <textarea
                onChange={handleInput}
                name="job_description"
                value={input.job_description}
                type="string"
                required="required"
                placeholder="description..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="course">Job Qualification</label>
              <br />
              <input
                onChange={handleInput}
                name="job_qualification"
                value={input.job_qualification}
                type="string"
                required="required"
                placeholder="qualification..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="score">Job type</label>
              <br />
              <input
                onChange={handleInput}
                name="job_type"
                value={input.job_type}
                type="string"
                required="required"
                placeholder="job type..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Job Tenure</label>
              <br />
              <input
                onChange={handleInput}
                name="job_tenure"
                value={input.job_tenure}
                type="string"
                required="required"
                placeholder="job tenure..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Job Status</label>
              <br />
              <input
                onChange={handleInput}
                name="job_status"
                value={input.job_status}
                type="number"
                placeholder="1 for open, 0 for close"
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Company Name</label>
              <br />
              <input
                onChange={handleInput}
                name="company_name"
                value={input.company_name}
                type="string"
                placeholder="name..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Company Logo</label>
              <br />
              <input
                onChange={handleInput}
                name="company_image_url"
                value={input.company_image_url}
                type="string"
                required="required"
                placeholder="logo here..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
           dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Company City</label>
              <br />
              <input
                onChange={handleInput}
                name="company_city"
                value={input.company_city}
                type="string"
                required="required"
                placeholder="city..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Salary Min</label>
              <br />
              <input
                onChange={handleInput}
                name="salary_min"
                value={input.salary_min}
                type="number"
                required="required"
                placeholder="minimum salary..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <label for="name">Salary Max</label>
              <br />
              <input
                onChange={handleInput}
                name="salary_max"
                value={input.salary_max}
                type="number"
                required="required"
                placeholder="maximum salary..."
                className="bg-gray-300 border border-white-300 
                text-black text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-white-700 
            dark:border-white-600 dark:placeholder-white-400 
             dark:focus:ring-blue-500 
            dark:focus:border-blue-500 font-semibold"
              />
              <br />
              <button
                type="submit"
                value="submit"
                className="focus:outline-none 
                            text-white 
                            bg-blue-700 
                            hover:bg-blue-800 
                            border inherit
                            focus:ring-4 
                            focus:ring-blue-300 
                            font-medium rounded-lg 
                            text-sm px-5 
                            py-2.5 
                            mt-2
                            mr-2 
                            mb-2 
                            dark:bg-blue-600 
                            dark:hover:bg-blue-700 
                            dark:focus:ring-blue-900"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormData;
