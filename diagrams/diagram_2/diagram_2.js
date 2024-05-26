(async function () {
        const data = [
            {
                label: "до 10 тис.",
                value: 15
            },
            {
                label: "10-15 тис.",
                value: 34
            },
            {
                label: "15-20 тис.",
                value: 28
            },
            {
                label: "20-25 тис.",
                value: 17
            },
            {
                label: "понад 25 тис.",
                value: 9
            }
        ];

        new Chart(
            document.getElementById("diagram2"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [
                        {
                            label: 'Заробітна плата',
                            data: data.map(item => item.value),
                            backgroundColor: 'rgb(36,183,86)'
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "2. Більшість співробітників отримує зарплату від 10 до 15 тис. гривень",
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
