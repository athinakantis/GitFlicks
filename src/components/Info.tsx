import './css/Info.css'

type Alert = 'INFO' | 'ERROR' | 'SUCCESS'

function Info({message = 'Something went wrong', type = 'INFO'}: {
    message: string,
    type: Alert
    }) {

    return (
        <div className={`${type} alert`}>
            <p>{message}</p>
            <button>Close </button>
        </div>
    )
}

export default Info;