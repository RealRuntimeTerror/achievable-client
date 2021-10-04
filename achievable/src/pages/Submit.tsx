import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  IonModal,
} from "@ionic/react";
import Log from "../components/Log";
import "./Submit.css";
import axios from "axios";

export const ActivityModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const addActivity = () => {
    console.log("Skenos adding activity");
    const activity = {
      activityName: "test activity",
      description: "test desc",
      activityColor: "blue",
    };
    axios.post("/activities/", activity).then((res) => {
      console.log("submit res:");
      console.log(res);
    });
  };

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <IonButton onClick={addActivity}>Add Activity</IonButton>
        <IonButton
          className="ion-margin-top"
          expand="block"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </IonButton>
      </IonModal>
      <IonButton
        className="ion-margin-top"
        expand="block"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </IonButton>
    </IonContent>
  );
};

const Submit: React.FC = () => {
  useIonViewDidEnter(() => {
    console.log("need to render activity list");
  });

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
        <Log activities={["Math", "Science", "Music", "Gym", "Coding"]} />
      </IonContent>

      <IonContent>
        <ActivityModal />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
