import { Chart } from "react-chartjs-2"
import 'chart.js/auto'
import { useNotesStore } from "../store/useNotesStore"

export function LineChart(){
  const {notes}=useNotesStore();

  const getData=()=>{
    const selectedNotes=notes.slice(0,7)
    const rankingNotes=selectedNotes.map(n=>n.rating)
    const noteLabels=selectedNotes.map(n=>n.date)
    return {rankingNotes, noteLabels}
  }

  const {rankingNotes, noteLabels}=getData()

  return (
    <Chart
        type="line"
        width={450}
        height={350}
        datasetIdKey='id'
        options={{
          responsive:false,
          maintainAspectRatio:false,
          aspectRatio:2,
          scales:{
            x:{
              type:"category",
              labels:noteLabels,
            },
            y:{
              display:false,
            }
          },
          plugins:{
            title:{
              text:"Tu estado de animo según las ultimas 7 notas",
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
              data: rankingNotes,
            },
          ],
        }}
      />
  )
}