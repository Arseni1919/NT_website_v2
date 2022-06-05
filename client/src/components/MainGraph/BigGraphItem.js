import Plot from "react-plotly.js";

// x: graphData['time'],
// close: graphData['close'],
// high: graphData['high'],
// low: graphData['low'],
// open: graphData['open'],


// x: [],
// close: [],
// high: [],
// low: [],
// open: [],


export default function BigGraphItem({width, graphData}) {

    let trace = {
        x: graphData['time'],
        close: graphData['close'],
        high: graphData['high'],
        low: graphData['low'],
        open: graphData['open'],

        // cutomise colors
        increasing: {line: {color: 'black'}},
        decreasing: {line: {color: 'red'}},

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
    };
    // console.log(graphData)
    let trace2 = {
        x: graphData['time'],
        y: graphData['volume'],
        type: 'bar',
        xaxis: 'x',
        yaxis: 'y2',
        marker: {
            color: 'rgb(158,202,225)',
            opacity: 0.4,
        }
    };

    // let graphsData = [trace];
    let graphsData = [trace, trace2];

    let layout = {
        width: width * 0.92,
        margin: {r: 0, t: 2, b: 4, l: 40},
        dragmode: 'zoom',
        showlegend: false,
        xaxis: {
            autorange: true,
            title: 'Date',
            type: 'date',
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
                }, {
                    step: 'all',
                    label: 'All Dates'
                }]
            }
        },
        yaxis: {
            autorange: true,
            // range: [0, 100000]
        },
        yaxis2: {
            // title: 'yaxis2 title', #9467bd
            overlaying: 'y',
            // autorange: true,
            range: [0, Math.max(...trace2.y) * 2],
            visible: false,
        }
    };
    return (
    <div className="BigGraphItem ">
        <Plot
        data={graphsData}
        layout={layout}
        useResizeHandler={true}
        // config={config}
        // style={{width: '100%'}}
      />
    </div>
    );
}
