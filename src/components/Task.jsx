
import { useState } from "react"
import { Checkbox } from "@mui/material"
import { Trash } from "phosphor-react"

export default function Task({ children }) {
    const [isChecked, setIsChecked] = useState(false)
    const [show, setShow] = useState(true)

    function handleChange() {
        setIsChecked(!isChecked)
    }

    function handleExclude() {
        setShow(false)
    }

    return (
        show ?
        <span className={`mb-5 text-black ${isChecked ? 'line-through text-zinc-300' : 'text-black'}`}>
            <Trash 
                size={24} 
                color="#ff1a3c" 
                className="inline cursor-pointer" 
                onClick={handleExclude}
            />
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
        </span> :
        ''
    )
}