

import React, { useState } from 'react';
import "./login.css";
import Avatarr from "../../Assets/user.png";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { toast } from 'react-toastify';
import { doc, setDoc } from "firebase/firestore";
import upload from '../../lib/upload.js'; // Use default import

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "" 
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", res.user);

      const imgUrl = await upload(avatar.file);
      console.log("Avatar uploaded:", imgUrl);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      console.log("User saved to Firestore:", res.user.uid);

      await setDoc(doc(db, "userschats", res.user.uid), {
        chats: [],
      });
      console.log("User chats initialized in Firestore:", res.user.uid);

      toast.success("Account created successfully!");

    } catch (err) {
      console.error("Error creating user:", err);
      toast.error(`Failed to create user: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(`Failed to log in: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login-rare-abc123">
      <div className="item-rare-def456">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin} className="form-rare-ghi789">
          <input className="input-rare-jkl012" type="text" placeholder="Email" name="email" />
          <input className="input-rare-jkl012" type="password" placeholder="Password" name="password" />
          <button disabled={loading} className="button-rare-stu901" type="submit">{loading ? "Loading" : "Sign in"}</button>
        </form>
      </div>
      <div className="separator-rare-vwx234"></div>
      <div className="item-rare-def456">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister} className="form-rare-ghi789">
          <label className="label-rare-mno345" htmlFor="file">
            <img className="img-rare-pqr678" src={avatar.url || Avatarr} alt="Avatar" />
            Upload an image
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
          <input className="input-rare-jkl012" type="text" placeholder="Username" name="username" />
          <input className="input-rare-jkl012" type="text" placeholder="Email" name="email" />
          <input className="input-rare-jkl012" type="password" placeholder="Password" name="password" />
          <button disabled={loading} className="button-rare-stu901" type="submit">{loading ? "Loading" : "Sign up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;








