import { IoIosSearch } from "react-icons/io";

interface InputSearchProps {
  placeholder: string;
  setValue: (value: string) => void;
  value: string;
}

export default function InputSearch ({placeholder, setValue, value}: InputSearchProps) {
  return (
    <div className="input-search">
      <IoIosSearch size={25}/>
      <input onChange={(event) => {
        const newValue = event.currentTarget.value
        setValue(newValue)
      }} className="input-in" type="text" placeholder={placeholder} value={value}/>
    </div>
  )
}
