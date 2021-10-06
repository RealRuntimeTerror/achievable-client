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
  IonInput,
  IonTextarea,
  IonLabel,
} from "@ionic/react";
import Log from "../components/Log";
import "./Submit.css";
import axios from "../util/axios";
import { Controller, useForm } from "react-hook-form";

export const ActivityModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);

    const activity = {
      activityName: data.ActivityName,
      description: data.ActivityDescription,
    };

    console.log("Skenos adding activity");
    axios
      .patch("activities/" + "615c3c031b90963a96e2c934", activity)
      .then((res) => {
        console.log("submit activity res:");
        console.log(res);
      });
  };
  console.log(errors);
  console.log("test");

  const [showModal, setShowModal] = useState(false);

  return (
    <IonCard>
      <IonCardContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel position="floating">Activity Name</IonLabel>

              <IonInput
                type="text"
                placeholder="Activity Name"
                {...register("ActivityName", {
                  required: true,
                  maxLength: 80,
                })}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Activity Description</IonLabel>
              <IonTextarea
                {...register("ActivityDescription", {
                  required: true,
                  maxLength: 200,
                })}
              />
            </IonItem>

            <IonButton expand="block" type="submit">
              Add Activity
            </IonButton>
          </form>

          <IonButton
            className="ion-margin-top"
            expand="block"
            onClick={() => {
              setShowModal(false);
            }}
          >
            close
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

  const getActivityList = () => {
    console.log("get activity list");
    axios.get("activities/615c3c031b90963a96e2c934").then((res) => {
      console.log("Activity List");
      setActivities(res.data);
      console.log(activities);
    });
  };

  useIonViewDidEnter(() => {
    getActivityList();
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
