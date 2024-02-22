// Delight of promise chaining
//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};


// .then() works on a promise
fakeRequest('/users')
    .then(res => {
        console.log(res);
        // will give us the response from the '/users'
        const id = res.data[0].id;

        // Now we need to return a promise 
        return fakeRequest(`/users/${id}`);
    })
    .then(res => {
        console.log(res);
        const topPostId = res.data.topPostId;

        // Now we need to return a promise again
        return fakeRequest(`/posts/${topPostId}`);
    })
    .then(res => { 
        console.log(res);
    })
    .catch(res => { 
        console.log("REQUEST REJECTED");
        console.log("ERROR CODE", res.status);
    })


// One of the delights in promise chaining is that even if one of the request fails then the catch() would work
// It is like catchAll() -- though there is no such method like that



