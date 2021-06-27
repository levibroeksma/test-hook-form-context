export default function Input({name, placeholder}) {
    return (
        <input
            placeholder={placeholder}
            className="textInput"
            name={name}
            id={name}
        />
    )
}