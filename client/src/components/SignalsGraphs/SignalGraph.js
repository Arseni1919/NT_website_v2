import {useEffect, useRef, useState} from "react";
import Plot from "react-plotly.js";

export default function SignalGraph({name}) {

    const parentRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect ( () => {
        if(parentRef.current){
            setHeight(parentRef.current.offsetHeight);
            setWidth(parentRef.current.offsetWidth);
        }
    }, [parentRef]);

    window.addEventListener('resize', (event) => {
        console.log('inside resize!!!')
        setHeight(parentRef.current.offsetHeight);
        setWidth(parentRef.current.offsetWidth);
    });

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
        name: name,
    };


    var data = [trace1];

    const layout = {
        width: width,
        height: 130,
        // title:name,
        showlegend: true,
        margin: {
            l: 20,
            r: 20,
            t: 20,
            b: 20
        },

    }

    return (
    <div className="SignalGraph" ref={parentRef}>
        <Plot
        data={data}
        layout={layout}
        // config={config}
      />
    </div>
    );
}