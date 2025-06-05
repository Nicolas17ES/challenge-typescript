
export interface LuminaireProps {
    id: string
    label: string
    onClick: (luminaire_id: string) => void
}

const Luminaire = ({id, label, onClick}: LuminaireProps) => {
    return (
        <div
            onClick={() => onClick(id)}
            className="flex justify-center items-center self-stretch w-full rounded-[8px] border border-[#AEAEB2] p-[16px] cursor-pointer transition-colors duration-200 ease-in-out hover:#6B4CB5"
            >
            <h3 className="text-[14px] text-center text-black text-lg">{label}</h3>
        </div>
    )
}

export default Luminaire
