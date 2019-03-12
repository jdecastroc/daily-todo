import gql from "graphql-tag";

export const getDayFromUser = (userID: Number, date: string) => ({
  query: gql`
    {
      day(userId: ${userID}, date: "${date}") {
        date
        objective
      }
    }
  `
});