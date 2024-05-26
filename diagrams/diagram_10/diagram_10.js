(
    async function () {
        const data = [
            {
                label: "R&D підрозділ",
                fondPart: 13
            },
            {
                label: "Виробничий підрозділ",
                fondPart: 67
            },
            {
                label: "Підрозділ маркетингу і продажів",
                fondPart: 23
            },
            {
                label: "Підрозділ взаємодії з клієнтами та споживачами",
                fondPart: 24
            },
            {
                label: "Юридичний підрозділ",
                fondPart: 11
            },
            {
                label: "Підрозділ бухгалтерії",
                fondPart: 9
            }
        ];

        new Chart(
            document.getElementById("diagram10"),
            {
                type: 'doughnut',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [
                        {
                            label: 'Рівень плинності кадрів(%)',
                            data: data.map(item => item.fondPart)
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "10. Найбільша частка фондів задіяна у виробництві",
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
                            position: 'right',
                            labels: {
                                color: 'rgb(0,0,0)',
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
