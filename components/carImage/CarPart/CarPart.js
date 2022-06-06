import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPart, removeSelection } from '../../../features/parts/PartsSlice';

export default function CarPart({part}) {
    const dispatch = useDispatch();
    const status = useSelector(state => state.parts.status);
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => {
        if (part.damaged) return dispatch(removeSelection(part))
        setClicked(true);
        dispatch(addPart(part));
    }

    React.useEffect(() => {
      if (status === 'pending') return
      setClicked(false);
    }, [status])

  return (
    <path d={part.path} stroke={part.damaged ? "#fac802" : (clicked ? "#fac802" : "#000")} fill="transparent" strokeWidth="1" onClick={handleClick} />
  )
}
