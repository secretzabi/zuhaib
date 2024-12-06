var options1 = {
    series: [82],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '50%',
            },
            track: {
                background: "#fff",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#0C8EFF']
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['cricket'],

    responsive: [{
        breakpoint: 1200, // Large screens
        options: {
            chart: {
                width: '100%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%', // Increase size for large screens
                    }
                }
            }
        }
    }, {
        breakpoint: 850, // Medium screens
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%' // Adjust size for medium screens
                    }
                }
            }
        }
    }, {
        breakpoint: 600, // Small screens
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%' // Further reduce size for small screens
                    }
                }
            }
        }
    }]
};

var options2 = {
    series: [100],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '50%',
            },
            track: {
                background: "#fff",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#4BCC83'] // Different color
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['cricket'],

    responsive: [{
        breakpoint: 1200,
        options: {
            chart: {
                width: '100%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    }
                }
            }
        }
    }, {
        breakpoint: 850,
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%'
                    }
                }
            }
        }
    }, {
        breakpoint: 600,
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%'
                    }
                }
            }
        }
    }]
};

var options3 = {
    series: [82],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '50%',
            },
            track: {
                background: "#fff",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#FFA800'] // Different color
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['cricket'],

    responsive: [{
        breakpoint: 1200,
        options: {
            chart: {
                width: '100%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    }
                }
            }
        }
    }, {
        breakpoint: 850,
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%'
                    }
                }
            }
        }
    }, {
        breakpoint: 600,
        options: {
            chart: {
                width: '120%'
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%'
                    }
                }
            }
        }
    }]
};

// Initialize charts
var chart1 = new ApexCharts(document.querySelector("#repPerSingleChartIn1"), options1);
var chart2 = new ApexCharts(document.querySelector("#repPerSingleChartIn2"), options2);
var chart3 = new ApexCharts(document.querySelector("#repPerSingleChartIn3"), options3);

chart1.render();
chart2.render();
chart3.render();
