import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import "./Log.css";

interface ContainerProps {
  activities: any;
}

const Log: React.FC<ContainerProps> = ({ activities }) => {
  const [activity, setActivity] = useState("noActivity");
  const [time, setTime] = useState("noTime");

  const logActivity = () => {
    alert("Activity Logged");
  };

  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>Log Activity</IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Activity</IonLabel>
            <IonSelect interface="popover">
              {activities.map((activity: any) => {
                return (
                  <IonSelectOption key={activity._id} value={activity}>
                    {activity.activityName}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Time Spent</IonLabel>

            <IonDatetime
              display-format="h:mm"
              picker-format="h:mm"
              value="1990-02-19T07:43Z"
            ></IonDatetime>
          </IonItem>
          <IonButton
            className="ion-margin-top"
            //   type="submit"
            expand="block"
            onClick={() => {
              console.log("Clicked Log");
              // console.log(activity);
              // console.log(time);
              logActivity();
            }}
          >
            Log
          </IonButton>
        </IonCardContent>
      </IonCard>

      {/* <form className="ion-padding">
        <IonList lines="full" class="ion-no-margin">
          <IonListHeader lines="full">
            <IonLabel>Activity Log</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel position="floating">Activity</IonLabel>
            <IonSelect  interface="popover" >
              {activities.map((activities) => {
                return (
                  <IonSelectOption key={activities} value={activities}>
                    {activities}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Time Spent</IonLabel>

            <IonDatetime
              display-format="h:mm"
              picker-format="h:mm"
              value="1990-02-19T07:43Z"
            ></IonDatetime>
          </IonItem>
        </IonList>
        <IonButton
          className="ion-margin-top"
          //   type="submit"
          expand="block"
          onClick={() => {
            console.log("Clicked Log");
            console.log(activity);
            console.log(time);
          }}
        >
          Log
        </IonButton>
      </form> */}
    </div>
  );
};

export default Log;
