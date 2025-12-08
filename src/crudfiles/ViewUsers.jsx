import axios from "axios";
import { useEffect, useState } from "react";

const ViewUsers = (props) => {
  let [regUsers, setRegUsers] = useState([]);
  // profile pic , email
  let {} = props;
  // http://localhost:8000/registered_users

  let getApi = async () => {
    let resp = await axios.get("http://localhost:8000/registered_users");
    console.log("View Users page ", resp);
    const { data } = resp;
    setRegUsers(data);
  };

  useEffect(() => {
    getApi();
  });

  return (
    <main className="viewUser">
      <h1 className="ViewUsers_title">All Registered Users</h1>
      <section className="users_container">
        {regUsers.map((value) => {
          return (
            <section key={value.id} className="oneUser">
              <img src={value.image} alt="No profile picture" height="100px" width="150px" className="profile_pic" />
              <h3>EMAIL : {value.email}</h3>
              <hr />

            </section>
          );
        })}
      </section>
    </main>
  );
};

export default ViewUsers;
