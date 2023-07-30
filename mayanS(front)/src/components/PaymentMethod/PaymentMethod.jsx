export const PaymentMethod = ({ name, paymentMethod_type})=>{ //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td>{name}</td>
            <td>{paymentMethod_type}</td>
            
        </>
    )
}