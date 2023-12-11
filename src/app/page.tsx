"use client";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";

// // @ts-ignore
// import { useFormState, useFormStatus } from "react-dom";
import {
  fetchAuthSession,
  fetchUserAttributes,
  signOut,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { post } from "aws-amplify/api";

Amplify.configure(awsconfig);

const existingConfig = Amplify.getConfig();

const configureAmplify = async () => {
  const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
  if (authToken) {
    Amplify.configure(existingConfig, {
      API: {
        REST: {
          headers: async () => {
            return { Authorization: authToken };
          },
        },
      },
    });
  }

  Amplify.configure({
    ...existingConfig,
    API: {
      ...existingConfig.API,
      REST: {
        ...existingConfig.API?.REST,
        CombatSportsRanking: {
          endpoint:
            "https://vn1ain4uf4.execute-api.us-east-1.amazonaws.com/prod",
          region: "us-east-1",
        },
      },
    },
  });
};

async function updateTodo() {
  try {
    const todo = { name: "My first todo", message: "Hello world!" };
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/host",
      options: {
        body: todo,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    const { body } = await restOperation.response;
    const myJson = await body.json();
    console.log("PUT call succeeded: ", myJson);
  } catch (err) {
    console.log("PUT call failed: ", err);
  }
}

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
    // etc
  },
};

export function Home({ signOut, user }: WithAuthenticatorProps) {
  const [name, setName] = useState("loading...");
  useEffect(() => {
    (async function anyNameFunction() {
      handleFetchUserAttributes();
      configureAmplify();
    })();
  }, []);

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setName(userAttributes.given_name || "No name found");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Authenticator formFields={signUpFields}>
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h1>Hello {name}</h1>
        <button onClick={signOut}>Sign out</button>{" "}
        <button onClick={updateTodo}>Test</button>
      </div>
    </Authenticator>
  );
}

export default withAuthenticator(Home);
