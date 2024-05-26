(
    async function () {
        const data = [
            {
                groupAge: "до 20",
                personnelTurnover: 6
            },
            {
                groupAge: "від 20 до 25",
                personnelTurnover: 14
            },
            {
                groupAge: "від 25 до 30",
                personnelTurnover: 15
            },
            {
                groupAge: "від 30 до 35",
                personnelTurnover: 26
            },
            {
                groupAge: "від 35 до 40",
                personnelTurnover: 13
            },
            {
                groupAge: "від 40 до 45",
                personnelTurnover: 15
            },
            {
                groupAge: "від 45",
                personnelTurnover: 7
            },
        ];

        new Chart(
            document.getElementById("diagram7"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.groupAge),
                    datasets: [{
                        label: 'Плинність кадрів, к-ть ос.',
                        data: data.map(item => item.personnelTurnover),
                        backgroundColor: 'rgb(36,183,86)'
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "7. Торік найбільша плинність кадрів спостерігалася у віковій групі від 30 до 35 років",
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
