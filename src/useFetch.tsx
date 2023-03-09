import { useState, useEffect } from "react";

export const useFetch = ({url}: {url: string}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(
            (response) => response.json())
            .then((json) => setData(json));
    });

    return {
        data,
    }
}
