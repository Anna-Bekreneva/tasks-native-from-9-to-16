import axios from 'axios';

console.log('lesson 3');

// Event loop
// + https://learn.javascript.ru/event-loop
// + https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// - https://www.youtube.com/watch?v=j4_9BZezSUA
// + https://www.jsv9000.app/

// Promise
// + https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//реализовать методы get, post, put, delete через axios

axios('https://jsonplaceholder.typicode.com/comments/1')
.then(response => console.log(response.data))

axios.post('https://jsonplaceholder.typicode.com/comments', {
	body: "My first post require",
	email: "firstRequire@gmail.com",
	id: 1,
	name: "Anna",
	postId: 1,
})
.then((response) => console.log(response.data))

axios.put('https://jsonplaceholder.typicode.com/comments/1', {
	method: 'PUT',
	body: "My first put require",
	email: "anjbekrenewa@gmail.com",
	id: 1,
	name: "Anna",
	postId: 1,
})
.then((response) => console.log(response.data))

axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
	headers: {
		Authorization: 'authorizationToken'
	},
})
.then(() => console.log('super'))

// just a plug
export default ()=>{};