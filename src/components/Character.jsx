import React from 'react'

const Character = ({data}) => {
    return (
        <div className="Character">
            <div className="card">
                <div className="card-front">
                    <img src={data.img} alt={data.name} />
                </div>
                <div className="card-back">
                    <div>Name: {data.name}</div>
                    <div>Portrayed As: {data.portrayed}</div>
                    <div>Nickname: {data.nickname}</div>
                    <div>Birthday: {data.birthday}</div>
                    <div>Status: {data.status}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Character
