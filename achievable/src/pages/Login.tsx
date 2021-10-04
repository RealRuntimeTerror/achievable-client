import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Login.css";
import GoogleLogin from 'react-google-login';
import {useContext} from 'react';
import {useState, IUser, IState} from '../StateContext';
 



const Login: React.FC = () => {
  
  const {state, setState} = useState();

  const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj);
    if(response.profileObj!=null)
      setState({
        user:{
        name:response.profileObj.name,
        googleId:response.profileObj.googleId,
        imageUrl:response.profileObj.imageUrl},
        isSignedIn: true
      })
  }

  return (
    <IonPage>

      <IonContent>
  
        <h1 className="h1title">Achievable</h1>

      <div className="div_btn_login">
        <GoogleLogin 
            className="btn_login"   
            clientId="587554543385-f080e0lh7r7ua8apv5744s8sd1g2vth6.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </div>
        <br/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
