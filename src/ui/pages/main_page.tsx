
import React from 'react';
import _ from 'lodash'

import { Scene } from '../layout/scene'
import { Sidebar } from '../layout/sidebar'; 

import { Luminaire } from '../components/luminaire';

function commentsReducer(state: any, action: { type: any; }) {
    switch (action.type) {
        case "add_comment":
        case "resolve_comment":
        case "edit_comment":
        default:
            return state
    }
}

const scene_id = 'scene-001'
const scene_name = 'Showroom Recepcion'
const mockedLuminaires = [
    { "id": "light-01", "label": "Luminaria Entrada" },
    { "id": "light-02", "label": "Luminaria Central" },
    { "id": "light-03", "label": "Luz Ambiente Lateral" }
]

const MainPage = () => {

    const [state, dispatch] = React.useReducer(commentsReducer, {})
    const [selectedLuminaire, setSelectedLuminaire] = React.useState<string|null>(null)
    const handleSelectLuminaire = ({ luminaire_id }: {luminaire_id:string}) => {
        setSelectedLuminaire(luminaire_id)
    }

    return (
        <div style={{display: 'flex', alignContent:'center', backgroundColor:'#ffffff' }} >
            <Scene>
                <React.Fragment>
                    <h2>{scene_name}</h2>
                    <div>
                        {_.map(mockedLuminaires, (luminaire) => {
                            const { id, label } = luminaire
                            return (
                                <Luminaire key={id} id={id} label={label} onClick={handleSelectLuminaire}/>
                            )
                        })}
                    </div>
                </React.Fragment>
            </Scene>
            <Sidebar comments={state} selectedLuminaire={selectedLuminaire} dispatch={dispatch}/>
        </div>
    )

}

export { MainPage }
