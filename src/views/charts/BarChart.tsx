import React, { useEffect, useRef } from "react";

// @ts-ignore
import Chart from "chart.js/auto"; // Import Chart.js


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

type ChartProps = {
	barChartData: number[];
	barChartLabels: string[];
};

const BarChart: React.FC<ChartProps> = ({
	barChartData,
	barChartLabels
}) => {
	const barChartOptions: object = {
			maintainAspectRatio: true,
			aspectRatio: 1.5,
			scales: {
					x: {},
					y: {
					type: 'linear',
					display: true,
					position: 'left'
					}
			},
			responsive: true,
			plugins: {
					legend: {
					position: 'bottom'
					},
					title: {
					display: true,
					text: 'Chart.js Bar Chart'
					}
			}
		}

		const chartRef = useRef<HTMLCanvasElement | null>(null);
		const chartInstance = useRef<Chart | null>(null);

		useEffect(() => {
			if (chartRef.current) {
			// Destroy the existing chart if it exists
			if (chartInstance.current) {
					chartInstance.current.destroy();
			}
			
			const ctx = chartRef.current.getContext("2d");
			if (ctx) {
					chartInstance.current = new Chart(ctx, {
					type: "bar",
					data: {
                        labels: barChartLabels,
                        datasets: [
                        {
                            label: "Chart Data",
                            data: barChartData,
                            backgroundColor: "#3d25f8",
                            borderColor: "rgba(67,24,255,1)",
                            borderWidth: 1,
                        },
                        ],
					},
					options: barChartOptions,
					});
			}
	}

	return () => {
		if (chartInstance.current) {
				chartInstance.current.destroy();
		}
	};

}, [barChartData, barChartLabels, barChartOptions]);

	

	return (
	 	<Card>
			<CardHeader
				title='Колонна диаграма'
				titleTypographyProps={{
					sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
				}}
				action={
					<IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
						<DotsVertical />
					</IconButton>
				}
			/>
			<CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
				<Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
					<canvas ref={chartRef} style={{ width: "100%", height: "205px" }}/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default BarChart;