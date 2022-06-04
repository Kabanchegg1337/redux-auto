import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelection } from '../../features/parts/PartsSlice';
import styles from './PartList.module.scss'

export default function PartList() {
    const parts = useSelector(state => state.parts.data).filter(part => part.damaged === true)
    const dispatch = useDispatch();
    const handleClick = (part) => {
        dispatch(removeSelection(part))
    }
  return (
    <ul className={styles.part_list}>
        {parts.map(part => {
            return (
                <li className={styles.part} key={part.id}>
                    <span>{part.name}</span>
                    <button onClick={() => handleClick(part)}>X</button>
                </li>
            )
        })}
    </ul>
  )
}
