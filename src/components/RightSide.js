/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from '../assests/images/logo blue 1.svg'

const RightSide = (props) => {
    const {userImage, userFirstName, userLastName, visible} = props

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "#72c7fff5", width: "100vw", height: "100vh"}}>
            {!visible && <h1>Login Successful!</h1>}
            <img src={logo} alt="logo image here" className="img-fluid" style={{position: "absolute", right:"35px", top:"40px", zIndex: 1}}/>
            <img src={userImage} alt="group image here" className="img-fluid" style={{scale: "75%"}}/>  
            <h3 style={{fontWeight: "bold"}}>Welcome {userFirstName+" "+userLastName}!</h3>
            {visible && <p>Login in to the admin portal</p>}
        </div>
    );
}

export default RightSide