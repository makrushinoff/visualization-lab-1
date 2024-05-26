(
    async function () {
        const data = [
                {
                    label: "Робота з клієнтами",
                    value: 15
                },
                {
                    label: "Розкладання товарів",
                    value: 20
                },
                {
                    label: "Інвентаризація",
                    value: 15
                },
                {
                    label: "Замовлення товарів",
                    value: 30
                },
                {
                    label: "Перерва",
                    value: 20
                },
            ]
        ;

        new Chart(
            document.getElementById("diagram5"),
            {
                type: 'pie',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [
                        {
                            label: 'Рівень плинності кадрів(%)',
                            data: data.map(item => item.value)
                        }
                    ]
                },
                options: {
                    indexAxis: "y",
                    plugins: {
                        title: {
                            display: true,
                            text: "5. Продавець магазину проводить з клієнтами лише 15% свого робочого часу",
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
