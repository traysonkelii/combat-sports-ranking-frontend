"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Tournament = () => {
  const router = useRouter();
  return (
    <>
      <h1>Tournament Landing [PUBLIC]</h1>
      <button type="button" onClick={() => router.push("tournament/create")}>
        Create Tournament [AUTH]
      </button>
      <button type="button" onClick={() => router.push("tournament/register")}>
        Register for Tournament [AUTH]
      </button>
    </>
  );
};

export default Tournament;
