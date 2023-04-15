import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
  const [users, setUser] = useState(null);
  // console.log(app);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      {users && (
        <div>
          <h3> User: {users?.displayName} </h3>
          <p>Email: {users.email} </p>
        </div>
      )}

      {/* <button onClick={handleSignIn}>Login now </button> */}

      {users ? (
        <button onClick={handleSignOut}>Sign Out </button>
      ) : (
        <button onClick={handleSignIn}>Login now </button>
      )}
    </div>
  );
};

export default Login;
