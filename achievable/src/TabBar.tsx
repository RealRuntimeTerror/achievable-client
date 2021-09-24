import {
    IonIcon,
    IonLabel,
    IonTabBar, IonTabButton,
  } from "@ionic/react";

import { fingerPrint, people, person, pieChart } from "ionicons/icons";
import React from 'react';
import {useState} from './StateContext';

const TabBar: React.FC = () => {
    const {state} = useState();

if(state.isSignedIn)
    return(        
    <div>
        <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={pieChart} />
            <IonLabel>Analytics</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={people} />
            <IonLabel>Groups</IonLabel>
        </IonTabButton>
    </div>
    )
else
return(        
        <IonTabButton tab="login" href="/login">
            <IonIcon icon={fingerPrint} />
            <IonLabel>Login</IonLabel>
        </IonTabButton>
    )

}

export default TabBar;