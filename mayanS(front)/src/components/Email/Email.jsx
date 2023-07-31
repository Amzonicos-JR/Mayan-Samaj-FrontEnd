export const Email = ({ from, subject, date, message, forPerson}) => {
    return (
        <>
            <td>{from}</td>
            <td>{subject}</td>
            <td>{date}</td>
            <td>{message}</td>
            <td>{forPerson}</td>                                        
        </>
    )
}