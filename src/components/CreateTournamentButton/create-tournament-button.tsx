import { post } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";

async function createTournament(tournament: string) {
  const userAttributes = await fetchUserAttributes();
  console.log("from create tournament", userAttributes);
  try {
    const createTournamentBody = {
      userName: userAttributes.sub ?? "",
      tournament,
    };
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/tournament",
      options: {
        body: createTournamentBody,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    const { body } = await restOperation.response;
    const myJson = await body.json();
    console.log(`createTournament ${myJson}`);
  } catch (err) {
    console.log("PUT call failed: ", err);
  }
}

export interface CreateTournamentButtonProps {
  tournament: string;
  displayText: string;
}

const CreateTournamentButton = ({
  tournament,
  displayText,
}: CreateTournamentButtonProps) => {
  return (
    <button onClick={() => createTournament(tournament)}>{displayText}</button>
  );
};

export default CreateTournamentButton;
