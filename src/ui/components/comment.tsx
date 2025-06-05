
type StatusType = 'pending' | 'resolved' | 'modified'

interface CommentProps  {
    id:string, 
    status:StatusType, 
    message: string, 
    author:string, 
    createdAt: string, 
    updatedAt:string
}

const Comment = ({id, status, message, author, createdAt, updatedAt}:CommentProps) => {
    return (
        <div style={{display: 'flex', alignContent:'center' }} >
            {id}
        </div>
    )
}

export { Comment }
