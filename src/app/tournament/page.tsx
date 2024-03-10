"use client";
import React from "react";
import WithAuth from "@/app/components/hoc/WithAuth";

const Tournament = () => {
  // const fetchMyData = async () => {
  //   try {
  //     const response = await fetch("/api/users/get-by-role", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         method: "POST",
  //       },
  //       body: JSON.stringify({ role: "COACH" }),
  //     });
  //     if (response) {
  //       console.log(response);
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <WithAuth>
      <div>Tournaments</div>
      <button>test</button>
    </WithAuth>
  );
};

export default Tournament;
