import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, close } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import axios from 'axios';
import React, { useState } from "react";
import { group } from "console";

const URL = `http://localhost:3000/groups`;

const sendGetRequest = () => {
  return axios({
    url: URL,
    method: 'get'
  }).then(response => {

    console.log(response);
    return response.data;
  })
};

const Tab3: React.FC = () => {
  const [groups, setGroups] = React.useState([]);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {

    sendGetRequest().then(data => setGroups(data));

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Groups</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Groups Page" />

        {
          groups.map(group => {

            return (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{group['groupName']}</IonCardTitle>
                  <IonCardSubtitle>Members: {group['members']}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="9">
                        <IonRow>
                          Admin: {group['adminId']}
                        </IonRow>
                        <IonRow>
                          <IonButton color="success">View</IonButton>
                        </IonRow>
                      </IonCol>
                      <IonCol size="3">
                        <IonRow>
                          <IonButton color="danger"><IonIcon icon={close} /></IonButton>
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            );
          })
        }
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        {/* modal */}
        <IonFabButton onClick={() => setShowModal(true)}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IonPage>

  );
};

export default Tab3;
