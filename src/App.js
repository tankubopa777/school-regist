import './App.css';
import Login_page from './page/Login.js';
import Teacher from './page/Teacher';
import React from "react";
import Summarize from './page/Summarize';
import FreeSubject from './page/FreeSubject';
import GroupSubject from './page/ChumSubject';
import ResetPassword from './page/ResetPassword';
import PageNotFound from './page/PageNotFound';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { fetchSubjects, fetchUsers } from './dataFetch.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsoOoA846r8_4opK16JowVzv8N3lcFgKM",
  authDomain: "pks-reg.firebaseapp.com",
  projectId: "pks-reg",
  storageBucket: "pks-reg.appspot.com",
  messagingSenderId: "905703944162",
  appId: "1:905703944162:web:53f9fe170121284f3693bb",
  measurementId: "G-DW4XC10V2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
    // Redirect to "/"
    window.location.replace("/");
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('Login');
  const [subjects, setSubjects] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSubjects()
        .then(response => {
          setSubjects(response);
          console.log("fS");
        })
        .catch(error => {
          console.log(error);
        });

      fetchUsers()
        .then(response => {
          setUsers(response);
          console.log("fu");
        })
        .catch(error => {
          console.log(error);
        });

    }, 2000);

    return () => clearInterval(interval);
  }, [subjects,users]); // to realtime reload component when state change

  const updateIsLoggedIn = (newValue) => {
    setIsLoggedIn(newValue);
  };

  const updateUser = (newValue) => {
    setUser(newValue);
  };

  const updateUsers = (newValue) => {
    setUsers(newValue);
  };

  const updatePage = (newValue) => {
    setPage(newValue);
  };

  const updateSubjects = (newValue) => {
    setSubjects(newValue);
  };

  // console.log(isLoggedIn)
  // console.log(user)
  // console.log(subjects)
  // console.log(users)

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login_page
            users={users} updateUsers={updateUsers}
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
          <Route path="/วิชาเสรี" element={<FreeSubject
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
          <Route path="/วิชาชุมนุม" element={<GroupSubject
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
          <Route path="/วิชาที่ลงทะเบียนเเล้ว" element={<Summarize
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
            <Route path="/แก้ไขรหัส" element={<ResetPassword
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
          <Route path="/Teacher" element={<Teacher
            users={users} updateUsers={updateUsers}
            user={user} updateUser={updateUser}
            isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
            page={page} updatePage={updatePage}
            subjects={subjects} updateSubjects={updateSubjects} />} />
          <Route path="*" element={<PageNotFound 
            page={page} updatePage={updatePage} />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );

}