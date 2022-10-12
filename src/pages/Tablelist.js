import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { GlobalContext } from '../component/GlobalContext';

const Tablelist = () => {
  const { state, handleFunction } = useContext(GlobalContext)
  const {
    input, setInput,
    data, setData,
    fetchStatus, setFetchStatus,
    currentId, setCurrentId
  } = state

  const {
    handleDelete,
    handleEdit,
    handleInput,
    handleSubmit,
    rupiah,
    handleText
  } = handleFunction

  useEffect(() => {
    if (fetchStatus === true) {
      axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
          setData(res.data.data)
        })
        .catch(() => {
        })
      setFetchStatus(false)
    }
  }, [fetchStatus, setFetchStatus])
  // console.log(data)

  return (
    <>
      <div className="flex">
        <div className="">
          <div className="overflow-auto relative table-auto">
            <table className="justify-self-center self-center table-auto overflow-auto w-full h-full bg-slate-400 text-center ">
              <thead>
                <tr className="text-white text-center">
                  <th className="p-3">NO</th>
                  <th className="p-3">TITLE</th>
                  <th className="p-3">JOB_DESCRIPTION</th>
                  <th className="p-3">JOB_QUALIFICATION</th>
                  <th className="p-3">JOB_TYPE</th>
                  <th className="p-3">JOB_TENURE</th>
                  <th className="p-3">JOB_STATUS</th>
                  <th className="p-3">COMPANY_NAME</th>
                  <th className="p-3">COMPANY_IMAGE_URL</th>
                  <th className="p-3">COMPANY-CITY</th>
                  <th className="p-3">SALARY_MIN</th>
                  <th className="p-3">SALARY_MAX</th>
                  <th className="p-3">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-left p-10 bg-white text-black">
                {data !== null &&
                  data.map((res, index) => (
                    <tr className="border-b-2">
                      <td className="p-1">{index + 1}</td>
                      <td className="p-1">{res.title}</td>
                      <td className="p-1">{handleText(res.job_description)}</td>
                      <td className="p-1">{handleText(res.job_qualification)}</td>
                      <td className="p-1">{res.job_type}</td>
                      <td className="p-1">{res.job_tenure}</td>
                      <td className="p-1">{res.job_status}</td>
                      <td className="p-1">{res.company_name}</td>
                      <td className="p-1">
                        <img
                          src={res.company_image_url}
                          alt="logo"
                          style={{
                            resizeMode: "containe",
                            height: 50,
                            width: 50,
                          }}
                          className="aspect-auto rounded-lg object-cover object-top border border-gray-200"
                        />
                      </td>
                      <td className="p-1">{res.company_city}</td>
                      <td className="p-1">{rupiah(res.salary_min)}</td>
                      <td className="p-1">{rupiah(res.salary_max)}</td>
                      <td>
                        <div className="flex row justify-center">
                          <button
                            onClick={handleEdit}
                            value={res.id}
                            type="button"
                            className="inline-flex items-center 
                    px-4 py-2 bg-yellow-400 border-gray-300 
                    rounded-md shadow-sm text-sm font-medium 
                    text-black hover:bg-yellow-600 
                    focus:outline-none focus:ring-2 
                    focus:ring-offset-2 
                    focus:ring-yellow-500"
                          >
                            Edit
                          </button>
                          &nbsp;
                          <button
                            onClick={handleDelete}
                            value={res.id}
                            type="button"
                            className="inline-flex items-center 
                    px-4 py-2 border border-gray-300 
                    rounded-md shadow-sm text-sm font-medium 
                    text-white bg-red-500 hover:bg-red-700 
                    focus:outline-none focus:ring-2 
                    focus:ring-offset-2 
                    focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tablelist;
