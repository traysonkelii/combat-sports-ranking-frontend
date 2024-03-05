"use client";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { fetchUserAttributes, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import CreateRoleButton from "./components/CreateRoleButton/create-role-button";
import CreateTournamentButton from "./components/CreateTournamentButton/create-tournament-button";
import GetUsersByRoleRoleButton from "./components/GetUsersByRoleButton/get-users-by-role-button";

const signUpFields = {
  signUp: {
    given_name: {
      placeHolder: "First Name",
      isRequired: true,
      label: "First Name",
      order: 1,
    },
    family_name: {
      placeHolder: "Last Name",
      isRequired: true,
      label: "Last Name",
      order: 2,
    },
    birthdate: {
      placeHolder: "dd/MM/yyyy",
      isRequired: true,
      label: "Birthday",
      order: 3,
    },
  },
};

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async function fetch() {
      handleFetchUserAttributes();
    })();
  }, []);

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      setName(userAttributes.given_name || "No name found");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Authenticator formFields={signUpFields}>
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        {name.length > 0 ? <h1>Hello {name}</h1> : <h1>Loading...</h1>}
        <button onClick={() => signOut()}>Sign out</button>
        <div style={{ display: "block", marginTop: "12px" }}>
          <CreateRoleButton role="HOST" displayText="Create Host" />
          <CreateRoleButton role="FIGHTER" displayText="Create Fighter" />
          <CreateRoleButton role="COACH" displayText="Create Coach" />
          <CreateRoleButton role="JUDGE" displayText="Create Judge" />
          <CreateTournamentButton
            tournament="nothing"
            displayText="Create Tournament"
          />
          <GetUsersByRoleRoleButton role="COACH" displayText="Get Coach" />
          <GetUsersByRoleRoleButton role="FIGHTER" displayText="Get Fighter" />
          <GetUsersByRoleRoleButton role="JUDGE" displayText="Get Judge" />
          <GetUsersByRoleRoleButton role="HOST" displayText="Get Host" />
        </div>
      </div>
    </Authenticator>
  );
}
