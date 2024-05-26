(
    async function () {
        const data = [
            {
                name: "Марія",
                salary: 2500,
                income: 3500
            },
            {
                name: "Іван",
                salary: 3000,
                income: 3600
            },
            {
                name: "Ольга",
                salary: 2800,
                income: 3100
            },
            {
                name: "Андрій",
                salary: 3200,
                income: 4200
            },
            {
                name: "Юлія",
                salary: 2700,
                income: 3800
            },
            {
                name: "Петро",
                salary: 4200,
                income: 7000
            }
        ];

        new Chart(
            document.getElementById("diagram11"),
            {
                data: {
                    labels: data.map(item => item.name),
                    datasets: [
                        {
                            type: 'line',
                            label: 'Заробітна плата',
                            data: data.map(item => item.salary)
                        },
                        {
                            type: 'line',
                            label: 'Загальний дохід',
                            data: data.map(item => item.income)
                        },
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "11. Спостерігається зв’язок між доходами і зарплатою",
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
