import {useEffect, useRef, useState} from 'react';
import BigGraphItem from "./BigGraphItem";
import { path } from "../../load_env_variables";
import useFetch from "react-fetch-hook";

export default function MainGraph({mainGraphStock, chosenStrategy}) {
    const { isLoading, data } = useFetch(`${path}/get_stock?stock=${mainGraphStock}`);
    const parentRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [graphTitle, setGraphTitle] = useState(mainGraphStock);
    const [graphData, setGraphData] = useState({'time': [], 'close': [], 'high': [], 'low': [], 'open': [], 'adj': []});

    useEffect ( () => {
        if(parentRef.current){
            // setHeight(parentRef.current.offsetHeight);
            setWidth(parentRef.current.offsetWidth);
        }
    }, [parentRef]);

    window.addEventListener('resize', (event) => {
        // console.log('inside resize!!!')
        if (parentRef) {
            // setHeight(parentRef.current.offsetHeight);
            setWidth(parentRef.current.offsetWidth);
        }
    });

    useEffect(() => {
        if (!isLoading) {
            setGraphData(data)
            setGraphTitle(mainGraphStock)
        }
        // eslint-disable-next-line
    }, [isLoading, data])






    return (
    <div ref={parentRef} className="MainGraph container" id={'myDiv'}>
        <h3>{graphTitle}{chosenStrategy ? `, Strategy: ${chosenStrategy}`: ``}</h3>

        <BigGraphItem width={width} graphData={graphData}/>

    </div>
    );
}
