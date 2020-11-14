function IncreaseAge(u:UserType) {
    u.age++
}

type UserType = {
    name: string
    age:number
    address: {title: string}
}

test("reference type test", ()=> {

    var user:UserType = {
        name: "Dimych",
        age: 32,
        address: {title: "Minsk"}
    }
    IncreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)

})

test("array reference test", ()=> {

    var users =[
        {
            name: "Dimych",
            age: 32,
        },
        {
            name: "Dimych",
            age: 32,
        }
    ]

    var admins = users;
    admins.push({name:"Bandyugan", age: 10})

    expect(users[2]).toEqual({name:"Bandyugan", age: 10})

})

test("value type test", ()=> {

   let usersCount = 100

   let adminsCount = usersCount;

    adminsCount = adminsCount+1;

})

test("reference2 type test", ()=> {

    var user:UserType = {
        name: "Dimych",
        age: 32,
        address: {title: "Minsk"}
    }

    //let addr = user.address

    var user2:UserType = {
        name: "Natasha",
        age: 30,
        address:user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')
})

test("reference type array test", ()=> {

    var address = {
        title: "Minsk"
    }

    var user:UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }

    var user2:UserType = {
        name: "Natasha",
        age: 30,
        address:address
    }

const users = [user, user2,{name: "Misha", age:4, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")
})

test("sort array test", ()=>{
    const letters = ['a', 'f', 'n', 'e', 'l'];
    letters.sort()

    expect(letters).toEqual(['f','e','l','a','n'])
});