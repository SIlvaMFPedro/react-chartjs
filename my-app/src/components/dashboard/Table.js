import React, {useState} from "react";
import CSVReader from 'react-csv-reader';
import Papa from 'papaparse';

// Dummy data to display in dashboard table
const initialData = [
    { user: 'luis.marin@accenture.com', collection: 'd8de5ed7-f8a6-4cf3-b48e-5f38399aa87b', service: 'ALEXIA JAVA CODE DOCUMENTATION', model: 'Athena32-Sweden', input_token: 4489, output_token: 506, total_tokens: 4995 },
    { user: 'xavier.rodoreda@accenture.com', collection: 'de23c9c7-75dc-4637-9769-d7faa3d18f6a', service: 'ALEXIA JAVA CODE DOCUMENTATION', model: 'Athena32-Sweden', input_token: 4845, output_token: 400, total_tokens: 5245 },
    { user: 'ignacio.ojeda@accenture.com', collection: '455462fb-80f4-48e3-83fd-02a9dbe4ea83', service: 'ALEXIA JAVA CODE DOCUMENTATION', model: 'Athena32-Sweden', input_token: 4206, output_token: 704, total_tokens: 4910 }
];


const Table = () => {
    const [data, setData] = useState(initialData);
    const [randomData, setRandomData] = useState([]);
    const [numLines, setNumLines] = useState(1);

    // Handler function to load file data
    const handleFileLoad = (data) => {
        setData(data);
    }

    // Get random data
    const getRandomData = () => {
        if (data.length > 0) {
            const randomIndices = [];
            while (randomIndices.length < numLines) {
              const randomIndex = Math.floor(Math.random() * data.length);
              if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
              }
            }
            const selectedData = randomIndices.map(index => data[index]);
            setRandomData(selectedData);
        }
    }

    return (
        <>
            <CSVReader
                onFileLoaded={(data) => handleFileLoad(data)}
                parserOptions={{ header: true }}
            />
            <div>
                <label>
                Number of lines to get:
                <input
                    type="number"
                    value={numLines}
                    onChange={(e) => setNumLines(Number(e.target.value))}
                    min="1"
                    max={data.length}
                />
                </label>
            </div>
            <button onClick={getRandomData}>
                Get Random Data
            </button>
            {randomData.length > 0 && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(randomData[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {randomData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Table;