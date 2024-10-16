import { ReactElement } from "react"

type Props = {
  icon: ReactElement;
  action: () => void;
}

export default function Badge({icon, action}: Props) {
  return (
    <div className="badge" onClick={() => action()}>
      {icon}
    </div>
  )
}