import { useContext } from "react"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"
import { RemoveEvent } from "../lib/Api"


interface IProps {
    event: IEvent
}
export const Event: React.FC<IProps> = ({ event }) => {

    const context = useContext(Context)
    if (!context) {
        throw new Error("Context not found")
    }

    const { dispatch } = context

    const onDelete = () => {
        RemoveEvent(event.id)
            .then(response => dispatch({ type: ActionTypes.RemoveEvent, payload: response.id }))
    }

    return <div>
        <p>event</p>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.composer}</strong>
        <p>{event.type}</p>
        <button onClick={onDelete}>Delete</button>

    </div>
}