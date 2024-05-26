(
    async function () {
        const data =[
            {
                year: "2024",
                schoolsAmount: 12926
            },
            {
                year: "2025",
                schoolsAmount: 12314
            },
            {
                year: "2026",
                schoolsAmount: 12108
            },
            {
                year: "2027",
                schoolsAmount: 12056
            },
            {
                year: "2028",
                schoolsAmount: 11912
            },
            {
                year: "2029",
                schoolsAmount: 11823
            },
            {
                year: "2030",
                schoolsAmount: 11790
            },
            {
                year: "2031",
                schoolsAmount: 11754
            },
            {
                year: "2032",
                schoolsAmount: 11701
            },
            {
                year: "2033",
                schoolsAmount: 11687
            },
            {
                year: "2034",
                schoolsAmount: 11640
            },
        ];

        new Chart(
            document.getElementById("diagram1"),
            {
                type: 'bar',
                data: {
                    labels: data.map(item => item.year),
                    datasets: [{
                        label: 'Кількість навчальних закладів',
                        data: data.map(item => item.schoolsAmount),
                        backgroundColor: 'rgb(36,183,86)'
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "1. Протягом наступних десяти років прогнозується зменшення кількості навчальних закладів",
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
