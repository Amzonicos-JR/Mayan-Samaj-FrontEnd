export const Contractor = ({ name, surname, phone, email, role }) => {
    return (
        <>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{role}</td>
        </>
    )
}