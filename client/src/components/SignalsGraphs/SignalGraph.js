import {useEffect, useRef, useState} from "react";
import SignalPlot from "./SignalPlot";
import useFetch from "react-fetch-hook";
import {path} from "../../load_env_variables";

export default function SignalGraph({signalName, mainGraphStock}) {

    const parentRef = useRef(null);
    // const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const { isLoading, data } = useFetch(`${path}/get_signal?stock=${mainGraphStock}&signal=${signalName}`);
    const [graphData, setGraphData] = useState({'time': [], signalName: []});
    const [graphTitle, setGraphTitle] = useState(`${signalName} - ${mainGraphStock}`);


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
        }
    }, [isLoading, data, mainGraphStock])

    useEffect(() => {
        setGraphTitle(`${signalName} - ${mainGraphStock}`)
        // eslint-disable-next-line
    }, [data])

    return (
    <div className="SignalGraph" ref={parentRef}>
        <SignalPlot signalName={signalName}
                    width={width}
                    graphData={graphData}
                    mainGraphStock={mainGraphStock}
                    graphTitle={graphTitle}
        />
    </div>
    );
}
