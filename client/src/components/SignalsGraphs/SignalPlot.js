import Plot from "react-plotly.js";

export default function SignalPlot({signalName, width, graphData, mainGraphStock, graphTitle}) {


    var trace1 = {
        x: graphData['time'],
        y: graphData[signalName],
        type: 'scatter',
        name: signalName,
    };


    var data = [trace1];

    const layout = {
        width: width * 0.92,
        height: 130,
        // title:name,
        // showlegend: true,
        xaxis: {title: `${graphTitle}`},
        margin: {
            l: 20,
            r: 20,
            t: 20,
            b: 30
        },

    }

    return (
    <div className="SignalPlot">
        <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        // config={config}
      />
    </div>
    );
}
