
import { useState } from "react"
import { Checkbox } from '@mui/material'
import HeadShake from 'react-reveal'

export default function Task({ children }) {
    const [isChecked, setIsChecked] = useState(false)

    function handleChange() {
        setIsChecked(!isChecked)
    }

    return (
        <span className={`mb-5 text-black ${isChecked ? 'line-through text-zinc-300' : 'text-black'}`}>
            <Checkbox
                checked={isChecked}
                onChange={handleChange}
                sx={{
                    color: '#0891b2',
                    '&.Mui-checked': {
                        color: "#0891b2",
                    },
                }}
            />
            {children}
        </span>
    )
}