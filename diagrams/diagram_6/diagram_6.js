(
    async function () {
        const data =[
            {
                experience: "1 - 2 роки",
                value: 15
            },
            {
                experience: "3 - 5 роки",
                value: 12
            },
            {
                experience: "6 - 9 роки",
                value: 17
            },
            {
                experience: "10 - 15 роки",
                value: 14
            },
            {
                experience: "15 - 20 роки",
                value: 11
            },
            {
                experience: "20 - 25 роки",
                value: 18
            },
            {
                experience: "25+ років",
                value: 13
            }
        ];

        new Chart(
            document.getElementById("diagram6"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.experience),
                    datasets: [
                        {
                            label: 'Відсоток надбавки',
                            data: data.map(item => item.value),
                            backgroundColor: 'rgb(36,183,86)'
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "6. Розмір надбавки до зарплати не залежить від трудового стажу",
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
