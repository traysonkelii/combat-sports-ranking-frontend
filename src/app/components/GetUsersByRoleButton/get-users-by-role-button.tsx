import { post } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";

async function getUsersByRole(role: string) {
  const userAttributes = await fetchUserAttributes();
  console.log("from get user by role", userAttributes);
  try {
    const getUserByRoleBody = {
      role,
    };
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/get-by-role",
      options: {
        body: getUserByRoleBody,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    const { body } = await restOperation.response;
    const myJson = await body.json();
    console.log(`getUserByRole ${myJson}`);
  } catch (err) {
    console.log("GET call failed: ", err);
  }
}

export interface CreateRoleButtonProps {
  role: "FIGHTER" | "HOST" | "COACH" | "JUDGE";
  displayText: string;
}

const GetUsersByRoleRoleButton = ({
  role,
  displayText,
}: CreateRoleButtonProps) => {
  return <button onClick={() => getUsersByRole(role)}>{displayText}</button>;
};

export default GetUsersByRoleRoleButton;
