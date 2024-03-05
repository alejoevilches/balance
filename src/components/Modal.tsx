import "./Modal.css"

interface ModalProps{
    children:React.ReactNode;
}

export function Modal({children}:ModalProps){
    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                {children}
            </div>
        </div>
    )
}