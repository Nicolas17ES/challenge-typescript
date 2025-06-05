
interface LuminaireProps  {id:string, label: string, onClick: any}

const Luminaire = ({id, label}:LuminaireProps) => {
    return (
        <div style={{display: 'flex', alignContent:'center' }} >
            {label}
        </div>
    )
}

export { Luminaire }
