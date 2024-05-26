(
    async function () {
        const data = [
            {
                name: "Олександр",
                surname: "Петренко",
                rate: 92.45
            },
            {
                name: "Наталія",
                surname: "Іванова",
                rate: 78.32
            },
            {
                name: "Дмитро",
                surname: "Сидоренко",
                rate: 86.12
            },
            {
                name: "Олена",
                surname: "Попова",
                rate: 96.76
            },
            {
                name: "Андрій",
                surname: "Лещенко",
                rate: 81.54
            },
            {
                name: "Ірина",
                surname: "Ковальчук",
                rate: 79.23
            },
            {
                name: "Максим",
                surname: "Волошин",
                rate: 99.87
            },
            {
                name: "Юлія",
                surname: "Гончар",
                rate: 99.86
            }
        ];

        new Chart(
            document.getElementById("diagram12"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => `${item.surname} ${item.name}`),
                    datasets: [{
                        label: 'Рейтинг',
                        data: data.map(item => item.rate),
                        backgroundColor: 'rgb(36,183,86)'
                    }]
                },
                options: {
                    indexAxis: "y",
                    plugins: {
                        title: {
                            display: true,
                            text: "12.\tУ серпні два студенти обігнали за успішністю шість інших",
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
