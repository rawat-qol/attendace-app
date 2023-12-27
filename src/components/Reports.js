// Reports.js
import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';


const Reports = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [{
                        label: 'Sample Data',
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }, []);



    return (
        <div className="flex items-center justify-center">
            <div className="max-w-4xl p-8">
                <h1 className="text-3xl font-bold mb-6">Reports</h1>
                <div className="flex flex-col space-y-6">
                    {/* Report 1: Paragraph */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-2">Finance - Forbes</h2>
                        <p className="text-gray-700">
                            <span>
                            Money is an emotional thing for people, and companies today are leading the way to make it easier for customers to manage their money. Hidden fees, overdraft fees, and student loans with high interest rates are a mood killer for banking customers. Fintech start-ups are leading on innovation and using software to facilitate banking and financial services. Here are ten companies that are extremely consumer-focused:
Citizens. As the top-rated bank in the Temkin Experience Ratings, Citizens uses a long-term approach to map the customer journey and predict what customers will need next.
Ally Bank. Ally scored high in the Forrester CX Index, in part because it partners with other digitally minded companies to provide convenient end-to-end customer solutions.
Navy Federal Credit Union. Named the top credit union for customer experience four years in a row, NFCU employees know the role they each play in creating satisfied customers.
Huntington National Bank. The bank spent two years listening to customers to create its digital banking hub that helps customers manage their money and set financial goals.
Charles Schwab. Charles Schwab leverages data to understand customers, track trends and changes and provide a forward-thinking approach to finances.
Edward Jones. Employees at all levels have a voice at this best place to work, which helps them engage with the company’s purpose and deliver strong customer service.
Discover. Recognized for being on the cutting edge of technology, Discover combines AI with strong human interaction to predict when customers will need financial help.
ING. Customer experience is a company-wide effort, and employees in all departments collaborate on innovative, customer-first ideas.
Capital One. Trust and transparency contribute to the customer-first culture where every employee has a role to play and is encouraged to surprise and delight customers. A young bank (31 years old) with 372 billion in assets, and still has its founder-CEO Richard Fairbank.
Chase. Chase was one of the first banks to move into mobile and has refined its app to create an intuitive user experience that gives customers everything they need in one place. I am a customer and have loved their mobile/personal banking since the beginning.
                            </span>
                        </p>
                    </div>

                    {/* Report 2: Graph (Placeholder) */}
                    <div className="flex items-center justify-center">
            <div className="max-w-4xl p-8">
                <h1 className="text-3xl font-bold mb-6">Reports</h1>
                <div className="flex flex-col space-y-6">
                    {/* ... */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-2">Report 2</h2>
                        <canvas ref={chartRef}></canvas>
                    </div>
                    {/* ... */}
                </div>
            </div>
        </div>

                    {/* Report 3: Image */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-2">AWS Tutorial</h2>
                        <img
                            className="w-full rounded-lg"
                            src="./images/aws-reports.png"
                            alt="Report 3 Image"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Reports;