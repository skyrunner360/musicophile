"use client";
import { appwriteID, appwriteAccObj } from "@/utils/appwrite";
import React, { useState } from "react";

const Signup = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function login(email, password) {
    await appwriteAccObj.createEmailPasswordSession(email, password);
    setLoggedInUser(await appwriteAccObj.get());
  }

  return (
    <div>
      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"}
      </p>

      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await appwriteAccObj.create(
              appwriteID.unique(),
              email,
              password,
              name
            );
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await appwriteAccObj.deleteSession("current");
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Signup;
