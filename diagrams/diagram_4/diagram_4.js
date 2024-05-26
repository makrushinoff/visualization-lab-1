(
    async function () {
        const data = [
            {
                label: "R&D підрозділ",
                value: 8
            },
            {
                label: "Виробничий підрозділ",
                value: 10
            },
            {
                label: "Підрозділ маркетингу і продажів",
                value: 9
            },
            {
                label: "Підрозділ взаємодії з клієнтами та споживачами",
                value: 9
            },
            {
                label: "Юридичний підрозділ",
                value: 8
            },
            {
                label: "Підрозділ бухгалтерії",
                value: 10
            }
        ];

        new Chart(
            document.getElementById("diagram4"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [
                        {
                            label: 'Рівень плинності кадрів, к-ть ос.',
                            data: data.map(item => item.value),
                            backgroundColor: 'rgb(36,183,86)'
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "4. У вересні рівень плинності кадрів у шести підрозділах був приблизно однаковий",
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
