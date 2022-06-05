import {useEffect, useRef, useState} from "react";
import Plot from "react-plotly.js";

export default function SignalGraph({name}) {

    const parentRef = useRef(null);
    // const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

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

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
        name: name,
    };


    var data = [trace1];

    const layout = {
        width: width * 0.9,
        height: 130,
        // title:name,
        // showlegend: true,
        xaxis: {title: name},
        margin: {
            l: 20,
            r: 20,
            t: 20,
            b: 30
        },

    }

    return (
    <div className="SignalGraph" ref={parentRef}>
        <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        // config={config}
      />
    </div>
    );
}
