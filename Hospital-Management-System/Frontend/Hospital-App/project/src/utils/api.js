export const fetchApi = async ({ url, method="GET", headers, body}, { auth=false } = {}) => {
    if (!url) return {
        success: false,
        message: "Invalid url " + url
    };
    const requestConfig = {
        method,
        headers,
        body: JSON.stringify(body)
    };

    if (auth) {
        const accessToken = localStorage.getItem("access-token");
        requestConfig.headers = { 
            ...requestConfig.headers,
            Authorization: `Bearer ${accessToken}`
        }
    }

    const request = await fetch(url, requestConfig);
    const response = await request.json();
    if (request.status >= 400) {
        return {
            status: request.status,
            success: false,
            message: response.error 
        }
    }

    return {
        status: request.status,
        success: true,
        data: response
    }
}