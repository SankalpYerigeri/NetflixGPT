import { useState } from "react"

const ReactPage = () =>
{
    const [set, reset] = useState("hey");

    return(
        <div>{set}</div>
    )
};

export default ReactPage;