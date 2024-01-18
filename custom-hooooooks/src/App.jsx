import useLocalstorage from './useLocalstorage'

export default function App() {
  const [value, updateValue] = useLocalstorage({key: 'name'})
  return (
    <>
      <input
        onChange={(e) => updateValue(e.target.value)}
        value={value}
        placeholder="Enter your name"
      />
    </>
  )
}
