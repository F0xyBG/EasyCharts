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

// ** Prime React Imports
import { SlideMenu } from 'primereact/slidemenu';
import { Button as PrimeReactButton } from 'primereact/button';

type ChartProps = {
	lineChartData: number[];
	lineChartLabels: string[];
};

const LineChart: React.FC<ChartProps> = ({
	lineChartData,
	lineChartLabels
}) => {
	const lineChartOptions: object = {
			maintainAspectRatio: true,
			aspectRatio: 1.5,
			scales: {
				x: {
					ticks: {
						color: "white"
					}
				},
				y: {
				ticks: {
					color: "white"
				},
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
				text: 'Chart.js Line Chart'
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
				type: "line",
				data: {
					labels: lineChartLabels,
					datasets: [
					{
							label: "Chart Data",
							data: lineChartData,
							backgroundColor: "#3d25f8",
							borderColor: "rgba(67,24,255,1)",
							borderWidth: 1,
					},
					],
				},
				options: lineChartOptions,
				});
			}
			}

			return () => {
				if (chartInstance.current) {
						chartInstance.current.destroy();
				}
			};

		}, [lineChartData, lineChartLabels, lineChartOptions]);


const menu = useRef(null);
const items = [
	{
		label:'File',
		icon:'pi pi-fw pi-file',
		items:[
			{
				label:'New',
				icon:'pi pi-fw pi-plus',
				items:[
				{
					label:'Bookmark',
					icon:'pi pi-fw pi-bookmark'
				},
				{
					label:'Video',
					icon:'pi pi-fw pi-video'
				},

				]
			},
			{
				label:'Delete',
				icon:'pi pi-fw pi-trash'
			},
			{
				separator:true
			},
			{
				label:'Export',
				icon:'pi pi-fw pi-external-link'
			}
		]
	},
	{
		label:'Edit',
		icon:'pi pi-fw pi-pencil',
		items:[
			{
				label:'Left',
				icon:'pi pi-fw pi-align-left'
			},
			{
				label:'Right',
				icon:'pi pi-fw pi-align-right'
			},
			{
				label:'Center',
				icon:'pi pi-fw pi-align-center'
			},
			{
				label:'Justify',
				icon:'pi pi-fw pi-align-justify'
			},

		]
	},
	{
		label:'Users',
		icon:'pi pi-fw pi-user',
		items:[
			{
				label:'New',
				icon:'pi pi-fw pi-user-plus',

			},
			{
				label:'Delete',
				icon:'pi pi-fw pi-user-minus',

			},
			{
				label:'Search',
				icon:'pi pi-fw pi-users',
				items:[
				{
					label:'Filter',
					icon:'pi pi-fw pi-filter',
					items:[
						{
							label:'Print',
							icon:'pi pi-fw pi-print'
						}
					]
				},
				{
					icon:'pi pi-fw pi-bars',
					label:'List'
				}
				]
			}
		]
	},
	{
		label:'Events',
		icon:'pi pi-fw pi-calendar',
		items:[
			{
				label:'Edit',
				icon:'pi pi-fw pi-pencil',
				items:[
				{
					label:'Save',
					icon:'pi pi-fw pi-calendar-plus'
				},
				{
					label:'Delete',
					icon:'pi pi-fw pi-calendar-minus'
				}
				]
			},
			{
				label:'Archieve',
				icon:'pi pi-fw pi-calendar-times',
				items:[
				{
					label:'Remove',
					icon:'pi pi-fw pi-calendar-minus'
				}
				]
			}
		]
	},
	{
		separator:true
	},
	{
		label:'Quit',
		icon:'pi pi-fw pi-power-off'
	}
];
	

	return (
	 	<Card>
			<CardHeader
				title='Weekly Overview'
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
				<Box>
					<div>
						<div className="card">
							{/* <h5>Basic</h5>
							<SlideMenu model={items} viewportHeight={220} menuWidth={175}></SlideMenu> */}

							<h5>Popup</h5>
							<SlideMenu
								ref={menu}
								model={items}
								popup
								viewportHeight={220}
								menuWidth={175}
								style={{
									border: '1px solid #696969', 
									backgroundColor: '#312D4B',
									width: '11em',
									color: 'rgba(231, 227, 252, 0.87)'
								}}
							></SlideMenu>
							
							<PrimeReactButton type="button" icon="pi pi-bars" label="Show" onClick={(event) =>{
								// @ts-ignore: Object is possibly 'null'.
								 menu.current.toggle(event)}
							}></PrimeReactButton>
						</div>
					</div>
				</Box>
			</CardContent>
		</Card>
	);
};

export default LineChart;