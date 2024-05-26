(
    async function () {
        const data = [
            {
                year: 2016,
                stockReturns: 210,
            },
            {
                year: 2017,
                stockReturns: 240,
            },
            {
                year: 2018,
                stockReturns: 280,
            },
            {
                year: 2019,
                stockReturns: 270,
            },
            {
                year: 2020,
                stockReturns: 350,
            },
            {
                year: 2021,
                stockReturns: 340,
            },
            {
                year: 2022,
                stockReturns: 320,
            },
            {
                year: 2023,
                stockReturns: 300,
            },
            {
                year: 2024,
                stockReturns: 290,
            }
        ];

        new Chart(
            document.getElementById("diagram9"),
            {
                type: 'line',
                data: {
                    labels: data.map(item => item.year),
                    datasets: [
                        {
                            label: 'Ціна за акцію, $',
                            data: data.map(item => item.stockReturns),
                            backgroundColor: 'rgb(36,183,86)',
                            borderColor: 'rgb(36,183,86)',
                            pointRadius: 4
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "9. Прибутковість акцій нашої компанії скорочується",
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
