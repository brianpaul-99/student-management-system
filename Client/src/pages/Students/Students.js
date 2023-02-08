import React, { useState, useEffect } from "react";
import "./Students.css";
import calendar from "../../assets/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStudent_api, getStudents_api } from "../../apiCalls";
import bg from "../../assets/bg.jpg";
export default function Students() {
  const [startDate, setStartDate] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  function getStudents() {
    getStudents_api().then((res) => {
      console.log(res);
      setStudentList(res);
    });
  }
  function submitInfo() {
    if (validInfo()) {
      //Make backend api call to add student to database
      let DoB = `${startDate.getMonth() +
        1}/${startDate.getDate()}/${startDate.getFullYear()}`;

      addStudent_api(firstName, lastName, DoB).then(() => {
        alert("Student Successfully Added");
        getStudents();
        setFirst("");
        setLast("");
        setStartDate("");
      });
    } else {
      alert(
        "Information entered is invalid. Please fill in all fields. \nStudent must be atleast 10 years old."
      );
    }
  }
  //validate enetered information
  function validInfo() {
    const currDate = new Date();
    const diffTime = currDate - startDate;
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
    console.log(diffYears);

    if (diffYears < 10 || !firstName || !lastName) return false;
    return true;
  }
  //Student table component
  const StudentsTable = () => {
    return (
      <div className="table">
        <h2>Student List</h2>
        <div className="headers">
          <h3>Name</h3>
          <h3>Date of Birth</h3>
        </div>
        <div className="list">
          {studentList.map((std) => (
            <div className="listRow">
              <div>{std.firstName + " " + std.lastName}</div>
              <div>{std.DoB}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="students">
      <h1>Manage Students Here</h1>
      {/*student table*/}
      <StudentsTable />
      {/*form section*/}
      <div className="form">
        <h2>Add New Student</h2>
        <div className="row">
          <label>First Name</label>
          <input
            onChange={(e) => setFirst(e.target.value)}
            type="text"
            name="firstName"
            value={firstName}
          />
        </div>
        <div className="row">
          <label>Last Name</label>
          <input
            onChange={(e) => setLast(e.target.value)}
            type="text"
            name="lastName"
            value={lastName}
          />
        </div>
        <div className="row">
          <label>Date of Birth</label>
          <div className="dateRow">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <button onClick={() => submitInfo()}>Submit</button>
      </div>
      <div className="underlay" />
    </div>
  );
}
