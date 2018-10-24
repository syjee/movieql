//import { findRemovedLocationsForDirective } from "graphql/utilities/findBreakingChanges";
//import { defaultCreateRemoteResolver } from "graphql-tools";

export const people = [
    {
        id : 0,
        name :  "zionMyung",
        age :  24,
        gender :  "female"
    },
    {
        id :  1,
        name : "nicolas",
        age :  18,
        gender :  "male"
    },
    {
        id : 2,
        name :  "soyoungJi",
        age :  24,
        gender :  "female"
    },
    {
        id : 3,
        name :  "somiJi",
        age :  26,
        gender :  "female"
    },
    {
        id : 4,
        name :  "chusilJeon",
        age :  54,
        gender :  "female"
    },
    {
        id :  5,
        name :  "changyoungJi",
        age :  51,
        gender :  "male"
    } 
];

export const getById = id => {
    const filterdPeople = people.filter(item => item.id === id);
    return filterdPeople[0];
}