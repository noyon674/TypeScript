// enums store -> constants; duplicate value not allow
//enum types: numerical, string, hetergenous[mix of numeric and string]

//numeric enum
enum RequestType {
    readData = 1,
    saveData,
    deleteData
}
console.log(RequestType)
console.log(RequestType.saveData)

//string enum
enum RequestData{
    getData = 'GET DATA',
    postData = 'POST DATA',
    putData = 'PUT DATA'
}
console.log(RequestData)
console.log(RequestData.getData)

//hetergeneous
enum RequestItem{
    name = "Noyon",
    age = 23
}
console.log(RequestItem)
console.log(RequestItem.age)