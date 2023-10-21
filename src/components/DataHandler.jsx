import { Client, Databases, Query } from "appwrite";

export function fetchDocuments() {
  const client = new Client()
    .setEndpoint(import.meta.env.PUBLIC_API_ENDPOINT)
    .setProject(import.meta.env.PUBLIC_PROJECT_ID);

  const databases = new Databases(client);

  return databases.listDocuments(
    import.meta.env.PUBLIC_DATABASE_ID,
    import.meta.env.PUBLIC_COLLECTION_ID,
    [Query.limit(50)]
  );
}
