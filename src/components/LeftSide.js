import Form from "./Form"

const LeftSide = (props) => {
    const {visible, setVisible, setImg, setUserFirstName, setUserLastName} = props
  
    return (
        visible && <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "white", width: "100vw", height: "100vh"}}>
            <Form setVisibility={setVisible} setImg={setImg} setUserFirstName={setUserFirstName} setUserLastName={setUserLastName}/>
        </div>
    )
}

export default LeftSide
