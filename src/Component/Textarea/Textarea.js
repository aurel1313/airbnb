import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
export const Textarea = ({
    style,
    valeurTextarea,
    setValeurTextarea,
    name,
    defaultValue,
    onChange,
    className
}) => {
    useEffect(() => {
        if (refTextarea.current) {
            refTextarea.current.style.height = 'auto'
            refTextarea.current.style.height =
                refTextarea.current.scrollHeight + 'px'
        }
    }, [valeurTextarea])

    const refTextarea = useRef(null)
    return (
        <div>
            <textarea
                style={{
                    width: 'auto',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'pink',
                    borderRadius: '5px',
                }}
                className={className}
                onChange={onChange}
                ref={refTextarea}
                value={valeurTextarea}
                name={name}
            />
        </div>
    )
}
