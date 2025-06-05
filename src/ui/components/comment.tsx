
type StatusType = 'pending' | 'resolved' | 'modified'

interface CommentProps  {
    id:string, 
    status:StatusType, 
    message: string, 
    author:string, 
    createdAt: Date, 
    updatedAt:string
    onClick?: () => void
}

const Comment = ({id, status, message, author, createdAt, updatedAt, onClick}:CommentProps) => {
    return (
        <div className="w-full bg-blue-100 rounded-[8px] p-[16px] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-50">
            <div className="flex items-center ">
                <span
                className="w-[44px] h-[44px]  rounded-full bg-[#4F378A40] border border-[##4F378A]"
                ></span>
                <div className="flex flex-col justify-center">
                <h4 className="font-semibold">{author}</h4>
                <span className="text-sm text-black">{createdAt.toLocaleDateString()}</span>
            </div>
        </div>
        <div className="flex flex-col mt-[10px]">
            <p className="font-bold text-left text-lg">{message}</p>
            <div className="flex justify-end">
            <button onClick={onClick} className="mt-[10px] bg-[#4F378A] text-black px-4 py-2 rounded-md hover:bg-blue-600 transition">
                {status}
            </button>
            </div>
        </div>
        </div>
    )
}

export default Comment
