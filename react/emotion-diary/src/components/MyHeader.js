import React from 'react'

const MyHeader = ({headText,left,right}) => {
  return (
    <header>
        <div className='head_btn_left'>
            {left}
        </div>
        <div className='head_text'>
            {headText}
        </div>
        <div className='head_btn_right'>
            {right}
        </div>
    </header>
  )
}

export default MyHeader