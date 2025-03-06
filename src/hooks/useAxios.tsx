import axios from "axios";
import { useState } from "react";


const useAxiosRequest = (baseUrl: string) => {
    const [data, setData] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const send = async (dataToSend: string) => {
        setError(null);

        try {
            const response = await axios.post(baseUrl, dataToSend);
            setData(await response.data);
        } catch (err) {
            if (err instanceof (Error)) setError(err.message || "Error popped up");
        }
    }

    return { data, error, send }

}

export default useAxiosRequest;