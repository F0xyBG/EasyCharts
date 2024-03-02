// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import React from 'react'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'

// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import LineChart from 'src/views/charts/LineChart'
import BarChart from 'src/views/charts/BarChart'
import PieChart from 'src/views/charts/PieChart'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'

const Dashboard = () => {
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4} style={{display: 'grid'}}>
          <LineChart
            lineChartLabels={['Данни 1', 'Данни 2', 'Данни 3']}
            lineChartData={[1, 3, 5]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PieChart
          pieChartData = {[300, 50, 100]}
          pieChartLabels = {[
            'Данни 1',
            'Данни 2',
            'Данни 3'
          ]}
          pieChartBackgroundColors = {[
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{display: 'grid'}}>
          <BarChart 
          barChartLabels={['Данни 1', 'Данни 2', 'Данни 3', 'Данни 4']}
          barChartData={[1, 3, 5, 6]}
           />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
