/**
 * 2 safe navigation operators are
 * 
 * a) ? operator (optional chaining operator) : used when we are not sure if the object we are trying to access is null or not
 * b) ! operator (postfix operator) : used when we know that the object we are trying to access is not null, but compiler thinks its null
 * 
 */

/* ? usage */

interface data {
    id: number,
    name?: string
}

/*The second element has name missing*/
const datalist: data[] = [{ id: 1, name: 'Rohit' }, { id: 2 }];

datalist.forEach(element => {
    // ? makes sure that the name is not null, before calling toString method
    console.log('single ? ',element.id, '============>', element.name?.toString());
    // ?? is short form for ternary operator
    console.log('double ??',element.id, '============>', element.name?.toString() ?? 'Name not provided');
});


/* ! usage */

/* index.html has body tag with id 'root'; but compiler doesnot know that */
const rootEl = document.getElementById('root');

/* ! after rootEl ensures compiler that the object we are accessing is not null/undefined */
console.log(rootEl!.children);
