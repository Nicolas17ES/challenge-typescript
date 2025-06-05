
import React from 'react';
import Comment from '../components/comment';

type SidebarProps = {
    comments: any, selectedLuminaire: string | null
}

export interface CommentProps {
    id: string,
    status: 'pending' | 'resolved' | 'modified',
    message: string,
    author: string,
    createdAt: Date,
    updatedAt: string,
    onClick?: () => void
}
    


const Sidebar = ({ comments, selectedLuminaire }: SidebarProps) => {

    if (!selectedLuminaire) {
        return (<SidebarPlaceholder />)
    }

    return (
        <aside style={{display: 'flex', alignContent:'center' }} >
            {comments["comments"].map((comment: CommentProps) => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    status={comment.status}
                    message={comment.message}
                    author={comment.author}
                    createdAt={comment.createdAt}
                    updatedAt={comment.updatedAt}
                    onClick={comment.onClick}
                />
            ))}   
            
        </aside>
    )

}

export { Sidebar }


// MARK: Sub components

const SidebarPlaceholder = () => (
    <aside>
        Start adding comments by selecting a luminaire
    </aside>
)