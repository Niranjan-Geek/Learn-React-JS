import arrayMapData from "./ArrayMapData";

const ArrayMapMethod = arrayMapData.map((data, index) => {
    return (
        <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.designation}</td>
        </tr>
    );
});

export default ArrayMapMethod;