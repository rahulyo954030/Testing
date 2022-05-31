import React, { useState } from 'react'
import "./Accordian.css"

type Element = { title: string; desc: string }

type AccordianType= {
    data: Element[]
}

export const Accordian = ({data}: AccordianType) => {
    const [opend, setOpend] = useState<number[]>([0, 5])
    // const [closed, setClosed] = useState<number[]>([0, 5])
    console.log(data[1])

    const handleOpen = (index:number) => {
        if(opend.includes(index)){
            // remove index from opend
            // setClosed([...closed, index])
        }
        else{
            setOpend([...opend, index])
        }

        
    }

  return (
    <div className='accordiancss'>
        {data.map((el,index) => (
            <Card key={index}  title={el.title} desc= {el.desc} isVisible={opend.includes(index)} index={index} handleOpen={handleOpen} />
        ))}
    </div>
  )
};

type CardProps = {
    title: string;
    desc: string;
    index: number;
    isVisible: Boolean;
    handleOpen:(i: number) => void
}
const Card = ({title, desc, isVisible, handleOpen, index}: CardProps) => {
    return <div>
        <h4 onClick={()=>handleOpen(index)}>{title}</h4>
        <div>{isVisible && <p>{desc}</p>}</div>
    </div>
}
