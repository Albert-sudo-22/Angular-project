import { error } from "console";
import { delay, fromEvent, map, mapTo, merge, of, pluck } from "rxjs";

const users = [
    {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'JakedaDog', firstname: "Jake", lastname: "daDog" },
    {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'FinndaHuman', firstname: "Finn", lastname: "daHuman" }
];

const usersVM = users.map(user=>{
    return {
        ...user,
        fullname: `${user.firstname} ${user.lastname}`
    }
});

const observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.log(err),
    complete: () => console.log('completed'),
};

merge(
    of(users[0]).pipe(delay(2000)),
    of(users[1]).pipe(delay(4000))
).pipe(
    map(user => ({...user, fullname: `${user.firstname} ${user.lastname}`}))
).subscribe(console.log)


const params$ = of({id:123, foo:{bar:'Finn'}})

const id$ = params$.pipe(pluck('foo','bar'))