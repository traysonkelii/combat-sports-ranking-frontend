"use client";
import React from "react";
import WithAuth from "../components/hoc/withAuth";

const Tournament = () => {
  return (
    <WithAuth>
      <div>Tournament</div>
    </WithAuth>
  );
};

export default Tournament;
