(async function () {
    const data = [
        {
            label: "CHIPO",
            price: 52.41,
            quality: 97
        },
        {
            label: "WOG",
            price: 57.99,
            quality: 97
        },
        {
            label: "Shell",
            price: 56.91,
            quality: 93
        },
        {
            label: "Okko",
            price: 57.99,
            quality: 97
        },
        {
            label: "Parallel",
            price: 55.99,
            quality: 91
        }
    ];

    new Chart(
        document.getElementById("diagram3"),
        {
            data: {
                labels: data.map(item => item.label),
                datasets: [
                    {
                        type: 'bar',
                        label: "Ціна пального",
                        data: data.map(item => item.price),
                        backgroundColor: 'rgb(44,208,104)'
                    },
                    {
                        type: 'bar',
                        label: "Якість пального",
                        data: data.map(item => item.quality),
                        backgroundColor: 'rgb(44,96,208)'
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "3. Підвищення ціни на окремі сорти бензину не означає підвищення їх якості",
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
