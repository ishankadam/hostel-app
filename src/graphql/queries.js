import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query {
    locations {
      id
      name
      image
      hostelCount
    }
  }
`;

export const GET_HOSTELS_BY_LOCATION = gql`
  query ($locationId: String!) {
    hostels(locationId: $locationId) {
      locationName
      hostels {
        id
        name
        image
      }
    }
  }
`;
