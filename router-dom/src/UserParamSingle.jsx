import { useParams } from "react-router-dom";

const UseParamSingle = () => {
    const {fname} = useParams();
    return(
        <>
            <h1>Hello...! This is UseParams {fname} Page.</h1>
        </>
    )
}

export default UseParamSingle;