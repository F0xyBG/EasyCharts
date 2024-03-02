import React, { useEffect, useRef, useState } from "react";

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
import "primereact/resources/themes/lara-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

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
// const items = [
// 	{
// 	  "label": "company: Tech Enterprises"
// 	},
// 	{
// 	  "label": "employees",
// 	  "items": [
// 		{
// 		  "label": "0",
// 		  "items": [
// 			{
// 			  "label": "name: John Doe"
// 			},
// 			{
// 			  "label": "department: Engineering"
// 			},
// 			{
// 			  "label": "skills",
// 			  "items": [
// 				{
// 				  "label": "0: JavaScript"
// 				},
// 				{
// 				  "label": "1: Python"
// 				},
// 				{
// 				  "label": "2: React"
// 				}
// 			  ]
// 			},
// 			{
// 			  "label": "manager",
// 			  "items": [
// 				{
// 				  "label": "name: Alice Smith"
// 				},
// 				{
// 				  "label": "department: Engineering Manager"
// 				},
// 				{
// 				  "label": "contact",
// 				  "items": [
// 					{
// 					  "label": "email: alice@techenterprises.com"
// 					},
// 					{
// 					  "label": "phone: +1234567890"
// 					}
// 				  ]
// 				}
// 			  ]
// 			}
// 		  ]
// 		},
// 		{
// 		  "label": "1",
// 		  "items": [
// 			{
// 			  "label": "name: Jane Smith"
// 			},
// 			{
// 			  "label": "department: Marketing"
// 			},
// 			{
// 			  "label": "skills",
// 			  "items": [
// 				{
// 				  "label": "0: Social Media Marketing"
// 				},
// 				{
// 				  "label": "1: Content Writing"
// 				}
// 			  ]
// 			},
// 			{
// 			  "label": "manager",
// 			  "items": [
// 				{
// 				  "label": "name: Bob Johnson"
// 				},
// 				{
// 				  "label": "department: Marketing Manager"
// 				},
// 				{
// 				  "label": "contact",
// 				  "items": [
// 					{
// 					  "label": "email: bob@techenterprises.com"
// 					},
// 					{
// 					  "label": "phone: +1987654321"
// 					}
// 				  ]
// 				}
// 			  ]
// 			}
// 		  ]
// 		}
// 	  ]
// 	},
// 	{
// 	  "label": "projects",
// 	  "items": [
// 		{
// 		  "label": "0",
// 		  "items": [
// 			{
// 			  "label": "name: Project X"
// 			},
// 			{
// 			  "label": "description: Developing a new software product"
// 			},
// 			{
// 			  "label": "team",
// 			  "items": [
// 				{
// 				  "label": "0",
// 				  "items": [
// 					{
// 					  "label": "name: David Brown"
// 					},
// 					{
// 					  "label": "role: Lead Developer"
// 					},
// 					{
// 					  "label": "skills",
// 					  "items": [
// 						{
// 						  "label": "0: Java"
// 						},
// 						{
// 						  "label": "1: Spring Boot"
// 						},
// 						{
// 						  "label": "2: MySQL"
// 						}
// 					  ]
// 					},
// 					{
// 					  "label": "manager",
// 					  "items": [
// 						{
// 						  "label": "name: John Doe"
// 						},
// 						{
// 						  "label": "department: Engineering"
// 						},
// 						{
// 						  "label": "contact",
// 						  "items": [
// 							{
// 							  "label": "email: john@techenterprises.com"
// 							},
// 							{
// 							  "label": "phone: +1122334455"
// 							}
// 						  ]
// 						}
// 					  ]
// 					}
// 				  ]
// 				},
// 				{
// 				  "label": "1",
// 				  "items": [
// 					{
// 					  "label": "name: Emily White"
// 					},
// 					{
// 					  "label": "role: UX Designer"
// 					},
// 					{
// 					  "label": "skills",
// 					  "items": [
// 						{
// 						  "label": "0: UI/UX Design"
// 						},
// 						{
// 						  "label": "1: Adobe XD"
// 						}
// 					  ]
// 					},
// 					{
// 					  "label": "manager",
// 					  "items": [
// 						{
// 						  "label": "name: Jane Smith"
// 						},
// 						{
// 						  "label": "department: Marketing"
// 						},
// 						{
// 						  "label": "contact",
// 						  "items": [
// 							{
// 							  "label": "email: jane@techenterprises.com"
// 							},
// 							{
// 							  "label": "phone: +2233445566"
// 							}
// 						  ]
// 						}
// 					  ]
// 					}
// 				  ]
// 				}
// 			  ]
// 			}
// 		  ]
// 		},
// 		{
// 		  "label": "1",
// 		  "items": [
// 			{
// 			  "label": "name: Project Y"
// 			},
// 			{
// 			  "label": "description: Marketing Campaign for New Product Launch"
// 			},
// 			{
// 			  "label": "team",
// 			  "items": [
// 				{
// 				  "label": "0",
// 				  "items": [
// 					{
// 					  "label": "name: Michael Green"
// 					},
// 					{
// 					  "label": "role: Campaign Manager"
// 					},
// 					{
// 					  "label": "skills",
// 					  "items": [
// 						{
// 						  "label": "0: Marketing Strategy"
// 						},
// 						{
// 						  "label": "1: Campaign Planning"
// 						}
// 					  ]
// 					},
// 					{
// 					  "label": "manager",
// 					  "items": [
// 						{
// 						  "label": "name: Jane Smith"
// 						},
// 						{
// 						  "label": "department: Marketing"
// 						},
// 						{
// 						  "label": "contact",
// 						  "items": [
// 							{
// 							  "label": "email: jane@techenterprises.com"
// 							},
// 							{
// 							  "label": "phone: +2233445566"
// 							}
// 						  ]
// 						}
// 					  ]
// 					}
// 				  ]
// 				},
// 				{
// 				  "label": "1",
// 				  "items": [
// 					{
// 					  "label": "name: Sophia Lee"
// 					},
// 					{
// 					  "label": "role: Content Creator"
// 					},
// 					{
// 					  "label": "skills",
// 					  "items": [
// 						{
// 						  "label": "0: Copywriting"
// 						},
// 						{
// 						  "label": "1: SEO"
// 						}
// 					  ]
// 					},
// 					{
// 					  "label": "manager",
// 					  "items": [
// 						{
// 						  "label": "name: Bob Johnson"
// 						},
// 						{
// 						  "label": "department: Marketing Manager"
// 						},
// 						{
// 						  "label": "contact",
// 						  "items": [
// 							{
// 							  "label": "email: bob@techenterprises.com"
// 							},
// 							{
// 							  "label": "phone: +1987654321"
// 							}
// 						  ]
// 						}
// 					  ]
// 					}
// 				  ]
// 				}
// 			  ]
// 			}
// 		  ]
// 		}
// 	  ]
// 	}
//   ];
	
const [items, setItems] = useState([]);
const getData = async () => {
	const resp = await fetch('https://api.sampleapis.com/futurama/episodes');
	const json = await resp.json();
	const menuModel = convertToMenuModel(json);
	setItems(menuModel);
}


function convertToMenuModel(data: any): any {
    let menuModel: any = [];
    Object.keys(data).forEach((key, index, array) => {
        const value = data[key];
        if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
            const submenuItems = convertToMenuModel(value);
            menuModel.push({ label: key, items: submenuItems });
            if (index < array.length - 1) {
                menuModel.push({ separator: true });
            }
        } else {
            menuModel.push({ label: key + ': ' + value });
            if (index < array.length - 1) {
                menuModel.push({ separator: true });
            }
        }
    });
    return menuModel;
}


useEffect(() => {
	getData();
}, []);

	return (
	 	<Card>
			<CardHeader
				title='Исторически данни'
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

							<h5>Изберете данни</h5>
							<SlideMenu
								ref={menu}
								model={items}
								popup
								viewportHeight={220}
								menuWidth={175}
								style={{
									width: '12em',
									overflow: 'auto',
									scrollbarWidth: 'auto',
								}}
							></SlideMenu>
							
							<PrimeReactButton type="button" icon="pi pi-bars" label="Данни" onClick={(event) =>{
								// @ts-ignore: Object is possibly 'null'.
								 menu.current.toggle(event)}
							}
							style={{
								color: 'white',
								backgroundColor: '#804BDF'
							}}></PrimeReactButton>
						</div>
					</div>
				</Box>
			</CardContent>
		</Card>
	);
};

export default LineChart;