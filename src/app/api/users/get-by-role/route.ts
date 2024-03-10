// import { post } from "aws-amplify/api";
// import { fetchUserAttributes } from "aws-amplify/auth";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const data = await request.json();
//   const userAttributes = await fetchUserAttributes();
//   console.log("user attributes", userAttributes);
//   console.log("from request", data);
//   try {
//     const getUserByRoleBody = {
//       roel: data.role,
//     };
//     const restOperation = post({
//       apiName: "CombatSportsRanking",
//       path: "/api/v1/get-by-role",
//       options: {
//         body: getUserByRoleBody,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     });
//     const { body } = await restOperation.response;
//     const myJson = await body.json();
//     return NextResponse.json({ data: myJson });
//   } catch (err) {
//     console.log("GET call failed: ", err);
//   }
// }
