import React, { useEffect, useRef } from "react";

// @ts-ignore
import Chart from "chart.js/auto"; // Import Chart.js

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'


type ChartProps = {
  lineChartData: number[];
  lineChartOptions: object;
  lineChartLabels: string[];
};

const WeeklyOverview: React.FC<ChartProps> = ({
  lineChartData,
  lineChartLabels,
  lineChartOptions,
}) => {

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
        <canvas ref={chartRef} style={{ width: "100%", height: "205px" }} />
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            45%
          </Typography>
          <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default WeeklyOverview;