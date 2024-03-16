"use client";
import React, { FormEvent } from "react";
import WithAuth from "@/components/hoc/WithAuth";
import { fetchUserAttributes } from "aws-amplify/auth";
import { convertDateAndTimeToUtc } from "@/utils/dateHelper";
import { post } from "aws-amplify/api";

export interface TournamentBody {
  host: string;
  tournamentName: string;
  dateStart?: string;
  dateEnd?: string;
  location?: string;
}

async function createTournamentApi(formData: FormData) {
  const userAttributes = await fetchUserAttributes();

  const host = userAttributes.sub ?? "";
  const tournamentName = formData.get("name")!.toString();
  const location = formData.get("location")!.toString();
  const time = formData.get("startTime")?.toString();
  let dateStart = formData.get("startDate")!.toString();
  dateStart = convertDateAndTimeToUtc(dateStart, time);
  const dateEnd = convertDateAndTimeToUtc(formData.get("endDate")!.toString());

  const tournamentBody: TournamentBody = {
    tournamentName,
    location,
    dateStart,
    dateEnd,
    host,
  };

  try {
    const restOperation = post({
      apiName: "CombatSportsRanking",
      path: "/api/v1/tournament",
      options: {
        body: { ...tournamentBody },
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

function CreateTournament() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    createTournamentApi(formData);
  }

  return (
    <WithAuth>
      <h1>Create Tournament Landing [AUTH]</h1>
      <br />
      <form onSubmit={onSubmit}>
        <span>Title</span>
        <input
          type="text"
          name="name"
          placeholder="Tournament Name"
          required={true}
        />
        <span>Start Date</span>
        <input type="date" name="startDate" title="Date" required={true} />
        <span>Start Time</span>
        <input type="time" name="startTime" required={true} />
        <span>End Date</span>
        <input type="date" name="endDate" title="Date" required={true} />
        <span>Location</span>
        <input type="text" name="location" title="Location" required={true} />
        <button type="submit">Submit</button>
      </form>
    </WithAuth>
  );
}

export default CreateTournament;
