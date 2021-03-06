type FriendsInfo = {
    "id": number,
    "name": string
}


export type User = {
    "_id": string,
    "index": number,
    "guid": string,
    "isActive": boolean,
    "balance": string,
    "picture": string,
    "age": number,
    "eyeColor": string,
    "name": string,
    "gender": string,
    "company": string,
    "email": string,
    "phone": string,
    "address": string,
    "registered": string,
    "latitude": number,
    "longitude": number,
    "tags": string [],
    "friends": FriendsInfo [],
    "greeting": string,
    "favoriteFruit": string,
}