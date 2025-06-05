
import React from 'react';

type SidebarProps = {
    comments: any, selectedLuminaire: string | null, dispatch: React.ActionDispatch
}

const Sidebar = ({ comments, selectedLuminaire, dispatch }: SidebarProps) => {

    if (!selectedLuminaire) {
        return (<SidebarPlaceholder />)
    }

    return (
        <aside style={{display: 'flex', alignContent:'center' }} >
            <div>Comments</div>
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