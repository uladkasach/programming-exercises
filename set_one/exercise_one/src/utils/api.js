/**
    In the node.js environment, fetch is not defined; define it fron the npm module node-fetch
**/
if(typeof fetch == "undefined") var fetch = require("node-fetch");


/**
	@description a singleton object, abstracting server interactions
**/
var api = {
	/**
		Retreive general user data for any user id
		@param {INT} user_id - the user id of the user you would like to retreive data for
		@returns {object} user_data - an object containing {meta, posts, albums, todos} for a user
	**/
	async retreive_user(user_id){
		// define promises first and await AFTER the definitions, so that the promises can be evaluated in parallel
		let promise_meta_data = fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`).then(response => response.json()) // retreive the user meta data
		let promise_post_data = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`).then(response => response.json()) // retreive the user post data
		let promise_album_data = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user_id}`).then(response => response.json()) // retreive the user post data
		let promise_todo_data = fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user_id}`).then(response => response.json()) // retreive the user post data
        let user_data = {
			meta : await promise_meta_data,
			posts : await promise_post_data,
			albums : await promise_album_data,
			todos : await promise_todo_data,
		};
		return user_data;
	},
	/**
		Retreive posts for any post id
        @param {INT} post_id - the post id of the post you would like to retreive data for
		@returns {object} post_data - an object containing {body, comments, title, id, userId} for a post
	**/
	async retreive_post(post_id){
		// define promises first and await AFTER the definitions, so that the promises can be evaluated in parallel
		let promise_post_data = fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(response => response.json()) // retreive the user meta data
		let promise_post_comments = fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`).then(response => response.json()) // retreive the user meta data
		let post_data = await promise_post_data; // wait for the post data object
		post_data.comments = await promise_post_comments; // append the comments to the post data object
		return post_data;
	},

    /**
        Post a comment to any post
        @param {INT} post_id - the post id of the post you would like to post a comment for
        @param {STRING} comment - the comment you would like to post
    **/
    async post_comment(post, comment){
        return fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: post.id,
                body : comment
                // NOTE: we are forgoing the Name, Email, and UserId parameters for the current user since they were not covered in the scope of this exercise
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
    },
}



/** Export the module formally for Common.js environment, if we are in it **/
if(typeof module != "undefined" && typeof require != "undefined"){
    module.exports = api;
}
