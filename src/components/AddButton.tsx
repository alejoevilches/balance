import "./AddButton.css"

interface AddButtonProps{
  handler:()=>void;
}

export function AddButton({handler}:AddButtonProps){
  return (
    <button className="add" onClick={handler}>+</button>
  )
}