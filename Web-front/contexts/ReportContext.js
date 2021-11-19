import React, { createContext, useState } from 'react'
// import {createData} from "../components/AdminPostList";

function createData( number ,name, nickname, contents, conform ) {
    return { number,name, nickname, contents, conform };
}

const ReportContext = createContext();

const ReportProvider = ({ children }) => {
    const [reports, setReports] = useState(
        [
            createData(1,'PK', 'pk-dev', 'whawahwawh'),
            createData(2,'Hawon', 'hawonjjang', 'KIN'),
            createData(3,'JeongHo', 'HOHO', 'I am smart'),
            createData(4,'Tim', 'Temp', 'this is dumb'),
            createData(5,'Alex', 'Prof', 'this is stupid'),
        ]
    );

    return (
        <ReportContext.Provider value={ [reports, setReports] }>
            {children}
        </ReportContext.Provider>
    )
}

export { ReportContext, ReportProvider };