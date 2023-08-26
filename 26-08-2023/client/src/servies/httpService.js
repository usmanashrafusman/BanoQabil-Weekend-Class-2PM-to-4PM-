const httpService = async (requestPayload) => {
    const baseURL = "http://localhost:3000/api"
    const { url, data = undefined, method = "GET" } = requestPayload;
    const response = await fetch(`${baseURL}/${url}`, {
        body: JSON.stringify(data),
        method,
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token") || null
        },
    });
    if (response && response.ok) {
        const data = await response.json();
        return data;
    } else {
        return undefined;
    }
}

export default httpService;