import { post } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";

async function createRole(role: string) {
  const userAttributes = await fetchUserAttributes();
  try {
    const createHostBody = {
      userName: userAttributes.sub ?? "",
      role,
      firstName: userAttributes.given_name ?? "",
      lastName: userAttributes.family_name ?? "",
    };
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/add-role",
      options: {
        body: createHostBody,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    const { body } = await restOperation.response;
    const myJson = await body.json();
  } catch (err) {
    console.log("PUT call failed: ", err);
  }
}

export interface CreateRoleButtonProps {
  role: "FIGHTER" | "HOST" | "COACH" | "JUDGE";
  displayText: string;
}

const CreateRoleButton = ({ role, displayText }: CreateRoleButtonProps) => {
  return <button onClick={() => createRole(role)}>{displayText}</button>;
};

export default CreateRoleButton;
