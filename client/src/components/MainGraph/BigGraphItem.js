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

    let graphsData = [trace];

    let layout = {
        width: width * 0.92,
        margin: {
        r: 0,
        t: 2,
        b: 4,
        l: 40
      },
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
                step: 'month',
                stepmode: 'backward',
                count: 1,
                label: '1 month'
            }, {
                step: 'month',
                stepmode: 'backward',
                count: 6,
                label: '6 months'
            }, {
                step: 'all',
                label: 'All dates'
            }]
          }
      },
      yaxis: {
        autorange: true,
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
