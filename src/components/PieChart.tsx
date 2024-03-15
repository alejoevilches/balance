import { Chart } from "react-chartjs-2"
import 'chart.js/auto'
import { useNotesStore } from "../store/useNotesStore"

export function PieChart(){
  const {notes}=useNotesStore();

const getData = () => {
    const selectedNotes = notes.slice(0, 7);
    const notesTags = selectedNotes.flatMap(n => n.tags.map(tag => tag.toLowerCase().trim())); // Usar flatMap directamente para obtener un solo array de tags normalizado
    const count: { [key: string]: number } = {};
    const selectedTagsSet = new Set<string>();
    
    notesTags.forEach(tag => {
        if (tag) { // Verificar si el tag no está vacío
            count[tag] = (count[tag] || 0) + 1; // Incrementar el contador para el tag
            selectedTagsSet.add(tag.replace(/\s/g, '')); // Agregar el tag al conjunto de tags únicos después de eliminar espacios en blanco
        }
    });
    
    const selectedTags = Array.from(selectedTagsSet);
    return { count, selectedTags };
}

const { count, selectedTags } = getData();
const data = selectedTags.map(tag => count[tag] || 0); 


  return (
    <Chart 
      type="pie"
      width={500}
      height={350}
      data={{
        labels:selectedTags,
        datasets:[{
          data:data
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