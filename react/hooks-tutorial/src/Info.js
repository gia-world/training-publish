import React, { useState } from 'react'

const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const onChangeName=e=>{
        setName(e.target.value)
    }
    const onChangeNickname=e=>{
        setNickname(e.target.value)
    }
  return (
    <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <p>
            <strong>name:</strong> {name}
        </p>
        <p>
            <strong>nickname: </strong> {nickname}
        </p>
    </div>
  )
}

export default Info