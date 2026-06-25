import React, { useState } from "react";

const StudentRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [terms, setTerms] = useState(false);

  function handleSkills(e) {
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    // First Name
    if (firstName.trim() === "") {
      newErrors.firstName = "First Name required";
    } else if (firstName.length < 3) {
      newErrors.firstName = "Minimum 3 characters required";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

    // Last Name
    if (lastName.trim() === "") {
      newErrors.lastName = "Last Name required";
    } else if (lastName.length < 2) {
      newErrors.lastName = "Minimum 2 characters required";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Numbers not allowed";
    }

    // Email
    if (email.trim() === "") {
      newErrors.email = "Email required";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must contain @";
    } else if (
      !email.endsWith(".com") &&
      !email.endsWith(".in")
    ) {
      newErrors.email = "Email must end with .com or .in";
    }

    // Password
    if (password.trim() === "") {
      newErrors.password = "Password required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character";
    }

    // Confirm Password
    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password required";
    } else if (confirmPassword.includes(" ")) {
      newErrors.confirmPassword = "Spaces not allowed";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Age
    const ageNumber = Number(age);

    if (age === "") {
      newErrors.age = "Age required";
    } else if (ageNumber < 18 || ageNumber > 60) {
      newErrors.age = "Age must be between 18 and 60";
    }

    // Mobile
    if (mobile.trim() === "") {
      newErrors.mobile = "Mobile required";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter valid mobile number";
    }

    // Gender
    if (gender === "") {
      newErrors.gender = "Select gender";
    }

    // Course
    if (course === "") {
      newErrors.course = "Select course";
    }

    // Skills
    if (skills.length < 2) {
      newErrors.skills = "Select minimum 2 skills";
    }

    // Address
    if (address.trim() === "") {
      newErrors.address = "Address required";
    } else if (address.length < 20) {
      newErrors.address = "Minimum 20 characters required";
    } else if (address.length > 150) {
      newErrors.address = "Maximum 150 characters allowed";
    }

    // Terms
    if (!terms) {
      newErrors.terms = "Accept Terms & Conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      alert(Object.values(newErrors)[0]);
      return;
    }

    alert("Registration Successful");
  }

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br /><br />

        <h3>Gender</h3>

        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        Female

        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={(e) => setGender(e.target.value)}
        />
        Other

        <br /><br />

        <h3>Course</h3>

        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="MERN">MERN</option>
          <option value="Java">Java</option>
        </select>

        <br /><br />

        <h3>Skills</h3>

        <input type="checkbox" value="HTML" onChange={handleSkills} /> HTML
        <input type="checkbox" value="CSS" onChange={handleSkills} /> CSS
        <input type="checkbox" value="JavaScript" onChange={handleSkills} /> JavaScript
        <input type="checkbox" value="React" onChange={handleSkills} /> React

        <br /><br />

        <h3>Address</h3>

        <textarea
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <br /><br />

        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        />
        I Agree to Terms & Conditions

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;