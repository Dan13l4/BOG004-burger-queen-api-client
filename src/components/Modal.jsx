import "./stylesheets/modal.css"

const Modal = ({children, condition, changeStatus}) => {
    return(
        <>
            {condition &&
                <div className="Overlay">
                    <div className="ContenedorModal">
                    <button className="BotonCerrar" onClick={() => changeStatus(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                    {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;