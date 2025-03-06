import { send } from "./axios";

export default async function shorten(longUrl: string) {

    const data = { "long_url": longUrl };
    const headers = { "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}` };
    const APILINK = "https://unelma.io/api/v1/link";

    const response = await send(APILINK, data, headers);

    console.log(response);
    return response;

}