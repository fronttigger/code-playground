let count: number = 0

function returnData<T extends number | string>(data: T): T {
  return data
}

returnData(1)
returnData('1')
// returnData(true)

interface Person {
  name: string
  age: number
}

interface Product {
  name: string
  price: number
}

type Excluded = Exclude<Person | Product, Product> // type Excluded = Person

type HelperReadonly<T> = any

const person: HelperReadonly<Person> = {
  name: 'fronttigger',
  age: 30,
}

person.name = 'backtigger' // Cannot assign to 'name' because it is a read-only property.
person.age = 29 // Cannot assign to 'age' because it is a read-only property.

type HelperPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

type PersonPick = HelperPick<Person, 'name'>

const todo: PersonPick = {
  name: 'backtigger',
}
