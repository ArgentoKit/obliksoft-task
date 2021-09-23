export const amountOfClients = (amount, query) => {
    return (
        query !== '' ? <span>Найдено {amount} {amount % 10 === 1 ? 'клиент' 
            : (amount % 10 > 1 && amount % 10 < 5) ? 'клиента' : 'клиентов'}</span> : <></>
    )
}