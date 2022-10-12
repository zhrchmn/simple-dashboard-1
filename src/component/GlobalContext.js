import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  let navigate = useNavigate()
  // Create
  const [input, setInput] = useState(
    {
      title: "",
      company_name: "",
      company_city: "",
      company_image_url: "",
      salary_min: "",
      salary_max: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      job_description: "",
      job_qualification: ""
    }
  )

  const [data, setData] = useState(null);

  const [fetchStatus, setFetchStatus] = useState(true);

  const [currentId, setCurrentId] = useState(-1);

  let tokenid =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kZXYtZXhhbXBsZS5zYW5iZXJjbG91ZC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NjIxMTIwMDMsImV4cCI6MTY2MjcxNjgwMywibmJmIjoxNjYyMTEyMDAzLCJqdGkiOiJkZWZRMldhQ0lQYTM2NXVaIiwic3ViIjoxOTgsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.4ImcdWXlUxBSag0JkGkY5GCHw0XK7WgzLkR8F-wuXYU";

  // Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value)

    axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
      {
        headers: { "Authorization": "Bearer " + tokenid }
      })
      .then((res) => {
        setFetchStatus(true)
      })
  }

  // Input
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setInput({ ...input, title: value })
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value })
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value })
    } else if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value })
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: value })
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: value })
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value })
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value })
    } else if (name === "job_status") {
      setInput({ ...input, job_status: value })
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value })
    } else if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value })
    }
    // console.log(input)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(input)
    let {
      title,
      company_name,
      company_city,
      company_image_url,
      salary_min,
      salary_max,
      job_type,
      job_tenure,
      job_status,
      job_description,
      job_qualification
    } = input

    if (currentId === -1) {
      // Create
      axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`,
        {
          title,
          company_name,
          company_city,
          company_image_url,
          salary_min,
          salary_max,
          job_type,
          job_tenure,
          job_status,
          job_description,
          job_qualification
        },
        { headers: { "Authorization": "Bearer " + tokenid } }
      ).then((res) => {
        // console.log(res)
        setFetchStatus(true)
        navigate('/tablelist')
      })
    } else {
      // Update
      axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
        {
          title,
          company_name,
          company_city,
          company_image_url,
          salary_min,
          salary_max,
          job_type,
          job_tenure,
          job_status,
          job_description,
          job_qualification
        },
        { headers: { "Authorization": "Bearer " + tokenid } }
      ).then((res) => {
        setFetchStatus(true)
        navigate('/tablelist')
      })
    }

    setCurrentId(-1)

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  }

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value)
    // console.log(idData)
    setCurrentId(idData)
    navigate(`/edit/${idData}`)
  }

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleText = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(0, 13) + "...";
    }
  };

  let state = {
    input, setInput,
    data, setData,
    fetchStatus, setFetchStatus,
    currentId, setCurrentId
  }

  let handleFunction = {
    handleDelete,
    handleEdit,
    handleInput,
    handleSubmit,
    rupiah,
    handleText
  }

  return (
    <GlobalContext.Provider
      value={
        {
          state,
          handleFunction
        }
      }
    >
      {props.children}
    </GlobalContext.Provider>
  )
}