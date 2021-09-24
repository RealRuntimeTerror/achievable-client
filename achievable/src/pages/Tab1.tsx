import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonAvatar,
  IonRow,
  IonCol
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useContext } from "react";
import {useState} from '../StateContext';


const Tab1: React.FC = () => {
  const {state, setState} = useState();

  const logOut = () => {
      setState({
        user:{
        name:'',
        googleId:'',
        imageUrl:''},
        isSignedIn: false
      })
  }

  if(state.isSignedIn)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol className="ion-align-items-center ion-justify-content-center">
            <IonAvatar className="ion-align-items-center ion-justify-content-center">
            <img src={state.user.imageUrl} alt={state.user.name}/>
            </IonAvatar>
              <p>name:&#09;{state.user.name}</p>
              <p>googleId:&#09;{state.user.googleId}</p>
            </IonCol>
            </IonRow>
        <IonButton color="danger" onClick={logOut}>Log out</IonButton>
      </IonContent>
    </IonPage>
  );
  else
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Not signed in</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
