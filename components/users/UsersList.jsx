"use client";

import { useState } from "react";
import Link from "next/link";

const UsersList = () => {
  const users = [
    { id: 1, name: "sarvesh T", username: "@sarvesh3191", status: "active", avatar: "https://i.pravatar.cc/150?img=55" },
    { id: 2, name: "Pradeep", username: "@pradeep4511", status: "active", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: 3, name: "Full Name", username: "@username", status: "blocked", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 4, name: "Hart Hagerty", username: "@hart_hagerty", status: "active", avatar: "https://robohash.org/4?set=set2&size=150x150" },
    { id: 5, name: "Jane Doe", username: "@jane_doe", status: "blocked", avatar: "https://robohash.org/5?set=set2&size=150x150" },
  ];
  const filters = ["all", "active", "blocked"];
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUsers = users.filter(
    (user) => activeFilter === "all" || user.status === activeFilter
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <h1>Filters</h1>
            {filters.map((filter, index) => (
              <label key={index} className="label cursor-pointer">
                <span className="label-text mr-2 capitalize font-medium">
                  {filter}
                </span>
                <input
                  type="radio"
                  name="status"
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="radio checked:bg-primary"
                  value={filter}
                  checked={activeFilter === filter}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          {filteredUsers.map((user) => (
            <div key={user.id} className="card bg-base-200 shadow md:flex-row md:items-center">
              <div className="card-body">
                <div className="flex flex-col md:flex-row justify-start gap-3">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={user.avatar} alt="User Avatar" />
                    </div>
                  </div>
                  <div className="w-auto flex flex-col">
                    <div className="font-bold text-center md:text-left">{user.name}</div>
                    <div className="text-sm opacity-50 text-center md:text-left">
                      <Link
                        href={`/dashboard/users/edit/${user.id}`}
                        className="link-hover text-primary font-semibold"
                      >
                        {user.username}
                      </Link>
                    </div>
                    <span
                      className={`badge mt-5 ${
                        user.status === "active" ? "badge-success" : "badge-error"
                      }`}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default UsersList;
