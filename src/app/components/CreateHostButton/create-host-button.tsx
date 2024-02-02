import { post } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";

async function createHost() {
  const userAttributes = await fetchUserAttributes();
  console.log("from Create host", userAttributes);
  try {
    const createHostBody = {
      userName: userAttributes.sub ?? "",
    };
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/host",
      options: {
        body: createHostBody,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    const { body } = await restOperation.response;
    const myJson = await body.json();
    console.log("PUT call succeeded: ", myJson);
    alert("You are now a host and can create tournaments");
  } catch (err) {
    console.log("PUT call failed: ", err);
  }
}

const CreateHostButton = () => {
  return <button onClick={createHost}>Create Host</button>;
};

export default CreateHostButton;
