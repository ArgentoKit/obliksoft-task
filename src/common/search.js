export const search = (rows, query) => {
    return rows.filter(row =>   row.firstName.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                                row.lastName.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                                row.phoneNumber.toString().indexOf(query.toLowerCase()) > -1)
}