import React from 'react'
import { useDispatch } from 'react-redux'
import { addPart, removeSelection } from '../../../features/parts/PartsSlice';

export default function CarPart({part}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (part.damaged) return dispatch(removeSelection(part))
        dispatch(addPart(part));
    }
  return (
    <path d={part.path} fill={part.damaged ? "#f00" : "#000"} onClick={handleClick} />
  )
}
