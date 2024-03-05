import "./Modal.css"

interface ModalType{
    children:React.ReactNode;
}

export function Modal({children}:{children:ModalType}){
    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                {children}
            </div>
        </div>
    )
}