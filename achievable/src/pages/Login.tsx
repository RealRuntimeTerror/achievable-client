import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Login.css";
import GoogleLogin from "react-google-login";
import { useContext } from "react";
import { useState, IUser, IState } from "../StateContext";
import axios from "../util/axios";

const Login: React.FC = () => {
  const { state, setState } = useState();

  const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj);
    if (response.profileObj != null) {
      const user = {
        name: response.profileObj.name,
        googleId: response.profileObj.googleId,
        imageUrl: response.profileObj.imageUrl,
      };
      console.log(user);
      setState({
        user: user,
        isSignedIn: true,
      });

      axios.post("users/auth", user).then((res) => {
        console.log("user auth res");
        console.log(res);
      });
    }
  };

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
          cookiePolicy={"single_host_origin"}
        />
        <br />
        <p>
          sign in status:{" "}
          {state.isSignedIn ? "siged in successfully" : "not signed in"}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
