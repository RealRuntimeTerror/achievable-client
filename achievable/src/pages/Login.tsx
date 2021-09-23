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
import {useState} from 'react';






const Login: React.FC = () => {
  const [ profile, setProfile ] = useState({name:'',imageUrl:'',googleId:'',email:''});

  const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj);
    if(response.profileObj!=null)
      setProfile(response.profileObj);
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
        <img src={profile.imageUrl} alt={profile.name}/>
        <p>name:&#09;{profile.name}</p>
        <p>email:&#09;{profile.email}</p>
        <p>googleId:&#09;{profile.googleId}</p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
