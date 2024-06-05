import "./Modal.css"

interface ModalProps{
    children:React.ReactNode;
    handler:()=>void
}

export function Modal({children, handler}:ModalProps){
    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                <div className="close-button" onClick={handler}>&times;</div>
                {children}
            </div>
        </div>
    )
}