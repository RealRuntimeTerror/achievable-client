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
  console.log(state);

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GoogleLogin
            clientId="587554543385-f080e0lh7r7ua8apv5744s8sd1g2vth6.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        <br/>
        <p>sign in status: {state.isSignedIn?"siged in successfully":"not signed in"}</p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
