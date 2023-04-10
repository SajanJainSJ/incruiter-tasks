import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {

    const fareData = {
        "-0.001, 0.0252": 16,
        "0.0252, 0.0513": 17,
        "0.0513, 0.058": 14,
        "0.058, 0.0693": 16,
        "0.0693, 0.101": 14,
        "0.101, 0.111": 16,
        "0.111, 0.149": 14,
        "0.149, 0.155": 17,
        "0.155, 0.176": 14,
        "0.176, 0.234": 17,
        "0.234, 0.397": 12,
        "0.397, 1.0": 16
    };

    const ageData =
    {
        "-0.001, 0.0252": 16,
        "0.0252, 0.0513": 16,
        "0.0513, 0.058": 16,
        "0.058, 0.0693": 17,
        "0.0693, 0.101": 12,
        "0.101, 0.111": 24,
        "0.111, 0.149": 8,
        "0.149, 0.155": 13,
        "0.155, 0.176": 15,
        "0.176, 0.234": 16,
        "0.234, 0.397": 18,
        "0.397, 1.0": 12
    };

    useEffect(() => {
        // Creating a new chart instance
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: Object.keys(ageData),
                datasets: [
                    {
                        label: "Age",
                        data: Object.values(ageData),
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Fare",
                        data: Object.values(fareData),
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: {
                        stacked: true,
                    },
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                        },
                    }]
                },
            },
        });
        return () => {
            myChart.destroy();
        };
    }, [ageData, fareData]);

    return (
        <div>
            <canvas id="myChart"></canvas>
        </div >
    );
};

export default BarChart;