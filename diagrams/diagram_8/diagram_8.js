(
    async function () {
        const data = [
            {
                region: "Північний регіон",
                birthRate: 0.98
            },
            {
                region: "Західний регіон",
                birthRate: 1.15
            },
            {
                region: "Центральний регіон",
                birthRate: 0.87
            },
            {
                region: "Східний регіон",
                birthRate: 1.05
            },
            {
                region: "Південний регіон",
                birthRate: 1.02
            }

        ];

        new Chart(
            document.getElementById("diagram8"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.region),
                    datasets: [
                        {
                            label: 'Коефіцієнт народжуваності',
                            data: data.map(item => item.birthRate),
                            backgroundColor: 'rgb(36,183,86)'
                        }
                    ]
                },
                options: {
                    indexAxis: "y",
                    plugins: {
                        title: {
                            display: true,
                            text: "8. Центральний регіон займає останнє місце з народжуваності",
                            color: 'rgb(0,0,0)',
                            font: {
                                family: 'Arial',
                                size: 20,
                            },
                            padding: {
                                top: 10,
                                bottom: 20
                            }
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 16
                                }
                            }
                        }
                    }
                }
            }
        );
    })();
