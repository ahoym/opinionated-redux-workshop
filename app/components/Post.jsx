import React from 'react'


const postStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    maxWidth: '600px',
    padding: '16px'
}

const imgStyle = {
    maxWidth: '100%'
}

const h2Style = {
    margin: '0px'
}

const h2ContainerStyle = {
    paddingBottom: '16px'
}

export default ({ post }) => {
    const { attributes } = post;
    console.log(attributes);
    return (
        <div style={postStyle}>
            <div style={h2ContainerStyle}>
                <h2 style={h2Style}>{ /* title goes here */ }</h2>
            </div>
            {
                // // ??? fix me: if an image exists for the post, show it here.
                attributes.image && <img src={attributes.image.largeUrl}
                            style={imgStyle} />
            }
            {
                // ??? fix me: content (text body) of post goes here
            }
        </div>
    )
}
