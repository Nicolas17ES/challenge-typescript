
import React from 'react';

type SceneProps = {
  children: React.ReactNode
}

const Scene = ({ children }: SceneProps) => {
    return (
        <div style={{display: 'flex', alignContent:'center' }} >
            {children}
        </div>
    )

}

export { Scene }
