import React, { useEffect, useRef } from "react";

// @ts-ignore
import {Chart, ChartType} from "chart.js"; // Import Chart.js

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

type ChartProps = {
	pieChartData: number[];
	pieChartLabels: string[];
	pieChartBackgroundColors: string[];
};

const PieChart: React.FC<ChartProps> = ({
	pieChartData,
	pieChartLabels,
	pieChartBackgroundColors
}) => {
	const pieChartOptions: object = {
			maintainAspectRatio: true,
			aspectRatio: 1.4,
			responsive: true,
			plugins: {
				legend: {
				position: 'bottom'
				},
				title: {
				display: true,
				text: 'Chart.js Pie Chart'
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
				type: "pie" as ChartType,
				data: {
					labels: pieChartLabels,
					datasets: [
					{
						label: "Chart Data",
						data: pieChartData,
						backgroundColor: pieChartBackgroundColors,
					},
					],
				},
				options: pieChartOptions,
				});
			}
	}

	return () => {
		if (chartInstance.current) {
				chartInstance.current.destroy();
		}
	};

}, [pieChartData, pieChartLabels, pieChartOptions]);

	

	return (
	 	<Card>
			<CardHeader
				title='Процентни данни'
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

export default PieChart;