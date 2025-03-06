import axios from "axios";

export const send = async (baseUrl: string, dataToSend: Record<string, string>, auth: Record<string, string>) => {

    try {
        const response = await axios.post(baseUrl, dataToSend, { headers: auth });
        return response.data;
    } catch (err) {
        if (err instanceof (Error)) console.log(err.message || "Error popped up");
    }
}

