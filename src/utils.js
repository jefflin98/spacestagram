export async function getAPIData(url, fn) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        fn(data);
    } catch (rejectedValue) {
        throw Error(`ERROR: ${rejectedValue}`);
    }
}