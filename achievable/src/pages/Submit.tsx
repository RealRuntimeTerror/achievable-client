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
  IonRow,
  IonCard,
  IonItem,
  IonGrid,
  IonCol,
  IonCardHeader,
  IonCardContent,
  IonList,
} from "@ionic/react";
import Log from "../components/Log";
import "./Submit.css";
import axios from "../util/axios";

export const ActivityModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const addActivity = () => {
    console.log("Skenos adding activity");
    const activity = {
      activityName: "test activity 9",
      description: "test desc 2",
    };
    axios
      .patch("activities/" + "615c3c031b90963a96e2c934", activity)
      .then((res) => {
        console.log("submit activity res:");
        console.log(res);
      });
  };

  return (
    <IonCard>
      <IonCardContent>
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
      </IonCardContent>
    </IonCard>
  );
};

const Submit: React.FC = () => {
  const [activities, setActivities] = useState([]);

  useIonViewDidEnter(() => {
    console.log("need to render activity list");
    axios.get("activities/615c3c031b90963a96e2c934").then((res) => {
      console.log("Activity List");
      setActivities(res.data);
      console.log(activities);
    });
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

        <Log activities={activities} />

        <ActivityModal />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
