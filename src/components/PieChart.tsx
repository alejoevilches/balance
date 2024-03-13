import { Chart } from "react-chartjs-2"
import 'chart.js/auto'

export function PieChart(){
  return (
    <Chart 
      type="pie"
      width={500}
      height={350}
      data={{
        labels:[
          "A",
          "B",
          "C"
        ],
        datasets:[{
          label:"Prueba",
          data:[200,10,5]
        }]
      }}
      options={{
        responsive:false,
        plugins:{
          title:{
            display:true,
            text:"Las palabras mas utilizadas en tus pensamientos recientes",
            font:{
              size:18,
              family:"Nunito",
            }
          }
        }
      }}
    />
  )
}