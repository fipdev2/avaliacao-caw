import './UpdatesCard.css'

interface UpdatesCardProps {
    title: string
    description: string
    updatedAt: string
}

function UpdatesCard({ title, description, updatedAt }: UpdatesCardProps) {
    return (
        <div className="update-div">
            <p className='update-title'>{title}</p>
            <p className='update-description'>{description}</p>
            <p className='update-updated'>Atualizado em {updatedAt}</p>
            <button className='update-button'>Ver mais...</button>
        </div>
    );
}

export default UpdatesCard;