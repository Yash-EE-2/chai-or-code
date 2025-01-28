import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })

    return (

        <div>
            <h1 className="text-center m-4 bg-gray-600 p-4 text-white">
                Github Followers: {data.followers}
            </h1>
        </div>
    );
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}