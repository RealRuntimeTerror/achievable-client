import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Log from "../components/Log";
import "./Submit.css";

const Submit: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Log</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Log" />
        <Log activities={["Math", "Science", "Music", "Gym", "Coding"]} />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
