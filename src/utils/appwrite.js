import { Client, Account } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`);

export const appwriteAccObj = new Account(client);
export { ID as appwriteID } from "appwrite";
