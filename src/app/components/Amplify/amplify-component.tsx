"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect } from "react";

/**
 * TODO: add environment variables to hide secure these values
 */
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_CtXx4eqHo",
      userPoolClientId: "3cqfa5rb5ideg7g5kjjks1jski",
    },
  },
});
const existingConfig = Amplify.getConfig();

const configureAmplify = async () => {
  const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
  console.log("here is the auth: " + authToken);
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
const AmplifyComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async function anyNameFunction() {
      configureAmplify();
    })();
  });

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

export default AmplifyComponent;
