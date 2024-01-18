import React from 'react'

export default function useLocalstorage({key, iniitalValue=''}) {
    const [value, setvalue] = React.useState(() => {
        let storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : iniitalValue
    })

    const updateValue = (newValue) => {
        setvalue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
        sessionStorage.setItem(key, JSON.stringify(newValue))
    }
    return [value, updateValue]
}
