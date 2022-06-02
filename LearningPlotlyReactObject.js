import Plot from 'react-plotly.js';

function MainGraph() {
    var trace1 = {
        x:['2020-10-04', '2021-11-04', '2023-12-04'],
        y: [90, 40, 60],
        type: 'scatter'
    };

    var data = [trace1];

    var layout = {
        title: 'Scroll and Zoom',
        showlegend: false
    };
    const config = {
        scrollZoom: true,
        editable: true,
        // staticPlot: true,
        toImageButtonOptions: {
            format: 'svg', // one of png, svg, jpeg, webp
            filename: 'custom_image',
            height: 500,
            width: 700,
            scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
          },
        modeBarButtonsToRemove: ['toImage'],

        displayModeBar: true,
        // displayModeBar: false,

        showLink: true,
        plotlyServerURL: "https://chart-studio.plotly.com",
        linkText: 'This text is custom!',
        showEditInChartStudio: true,
        displaylogo: false,
        responsive: true,
    }
    return (
    <div className="MainGraph container">
        <h3>Main</h3>
        <Plot
        data={data}
        layout={layout}
        config={config}
      />
    </div>
    );
}

export default MainGraph;