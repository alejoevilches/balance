import { Chart } from "react-chartjs-2"
import 'chart.js/auto'

export function LineChart(){
  return (
    <Chart
        type="line"
        width={350}
        height={250}
        datasetIdKey='id'
        options={{
          responsive:false,
          maintainAspectRatio:false,
          aspectRatio:2,
          scales:{
            x:{
              type:"category",
              labels:["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
            },
            y:{
              display:false,
            }
          },
          plugins:{
            title:{
              text:"Tu estado de animo los ultimos 7 dias",
              display:true,
              font:{
                family:"Nunito",
                size:18
              }
            },
            legend:{
              display:false
            }
        }
        }}
        data={{
          labels: ['Jun', 'Jul', 'Aug', "Sep"],
          datasets: [
            {
              label: '',
              data: [3, 2, 4, 5, 2, 1, 5],
            },
          ],
        }}
      />
  )
}