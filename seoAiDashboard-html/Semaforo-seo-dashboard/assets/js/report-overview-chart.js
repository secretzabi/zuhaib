Highcharts.chart('repWebChartMain', {
    chart: {
        type: 'variablepie',
    },
    title: {
        text: undefined,
        align: 'left',
    },
    tooltip: {
        headerFormat: '',
    },
    plotOptions: {
        variablepie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            },
        },
    },
    credits: {
        enabled: false,
    },
    series: [{
        minPointSize: 10,
        innerSize: '55%',
        zMin: 0,
        name: 'Status',
        borderRadius: 5,
        data: [{
            name: 'Issues',
            y: 39,
            z: 92,
        }, {
            name: 'Test Passed',
            y: 11,
            z: 150,
        }],
        colors: ['#FFEFCF', '#FFA800'],
    }],
    

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600 
            },
            chartOptions: {
                chart: {
                    height: '40%' 
                },
                plotOptions: {
                    variablepie: {
                        innerSize: '40%' 
                    }
                }
            }
        }, {
            condition: {
                maxWidth: 400 
            },
            chartOptions: {
                chart: {
                    height: '40%' 
                },
                plotOptions: {
                    variablepie: {
                        innerSize: '10%' 
                    }
                }
            }
        }]
    }
});
