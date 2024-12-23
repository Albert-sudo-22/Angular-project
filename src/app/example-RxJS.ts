import { error } from "console";
import { catchError, delay, distinct, filter, find, first, forkJoin, from, fromEvent, interval, last, map, mapTo, merge, of, pluck, single, skip, take, takeLast, takeUntil } from "rxjs";

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


// from([1, 2, 3, 4, 5, 6])
//   .pipe(
//     filter((x) => x % 2 === 0) // số chẵn
//   )
//   .subscribe(console.log); // output: 2, 4, 6

//   from([1, 2, 3, 4, 5, 6])
//   .pipe(first())
//   .subscribe(console.log, null, () => console.log('complete')); // output: 1 -> complete

// of() // an empty Observable
//   .pipe(first())
//   .subscribe(null, console.log, null); // Error: EmptyError

//   from([1, 2, 3, 4, 5, 6])
//   .pipe(last())
//   .subscribe(console.log, null, () => console.log('complete')); // output: 6 -> complete

// of() // an empty Observable
//   .pipe(last())
//   .subscribe(null, console.log, null); // Error: EmptyError

// from([1, 2, 3, 4, 5, 6])
//   .pipe(
//     find((x) => x % 2 === 0) // số chẵn
//   )
//   .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete

// from([1, 2, 3]).pipe(single()).subscribe(null, console.log, null); // error: Error -> nhiều hơn 1 giá trị được emit từ from() và single() không có điều kiện gì.

// from([1, 2, 3])
//   .pipe(single((x) => x === 2))
//   .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete

// from([1, 2, 3])
//   .pipe(single((x) => x > 1))
//   .subscribe(null, console.log, null); // error: Error -> có nhiều hơn 1 giá trị > 1.

// from([1, 2, 3, 4])
//   .pipe(take(3))
//   .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2 -> complete

// from([1, 2, 3, 4])
//   .pipe(takeLast(2))
//   .subscribe(console.log, null, () => console.log('complete')); // output: 3, 4 -> complete

// from([1, 2, 3, 4])
//   .pipe(skip(1))
//   .subscribe(console.log, null, () => console.log('complete')); // output: 2, 3, 4 --> complete

// from([1, 2, 3, 4, 5, 5, 4, 3, 6, 1])
//   .pipe(distinct())
//   .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2, 3, 4, 5, 6 -> complete

//   of({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' })
//   .pipe(distinct((p) => p.name))
//   .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' } -> complete

//   forkJoin([of(1), of('hello'), of({ foo: 'bar' })]).subscribe(observer);
// // output: [1, 'hello', {foo: 'bar'}]
// // output: 'complete'

// forkJoin({ one: of(1), hello: of('hello'), foo: of({ foo: 'bar' }) }).subscribe(
//   observer
// );
// /**
//  * output:
//  * {
//  *   one: 1,
//  *   hello: 'hello',
//  *   foo: { foo: 'bar' }
//  * }
//  * output: 'complete'
//  */


const cached = [4, 5];
of(1, 2, 3, 4, 5)
  .pipe(
    map((n) => {
      if (cached.includes(n)) {
        throw new Error('Duplicated: ' + n);
      }
      return n;
    }),
    catchError((err, caught) => of(err))
  )
  .subscribe(observer);

/**
 * Output:
 * --1--2--3--(next: Error)--|
 */