import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import Papa from 'papaparse';

const RandomDataFromCSV = () => {
    const [data, setData] = useState([]);
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
    };

    return (
        <div>
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
                    <h3>Random Data:</h3>
                    <pre>{JSON.stringify(randomData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default RandomDataFromCSV;