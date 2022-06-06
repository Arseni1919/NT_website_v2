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
        height: 140,
        // title:name,
        // showlegend: true,
        xaxis: {
            title: `${graphTitle}`,
            rangeselector: {
                x: 0,
                y: 1.2,
                xanchor: 'left',
                font: {size:8},
                buttons: [{
                    step: 'minute',
                    stepmode: 'backward',
                    count: 30,
                    label: '30 minutes'
                }, {
                    step: 'hour',
                    stepmode: 'backward',
                    count: 1,
                    label: '1 hour'
                },{
                    step: 'hour',
                    stepmode: 'backward',
                    count: 2,
                    label: '2 hours'
                }, {
                    step: 'hour',
                    stepmode: 'backward',
                    count: 4,
                    label: '4 hours'
                }, {
                    step: 'all',
                    label: 'All Dates'
                }]
            }
        },
        margin: {
            l: 30,
            r: 0,
            t: 40,
            b: 40
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
