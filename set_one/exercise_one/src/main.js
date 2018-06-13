/**
	@file This is the main file for this exercise, utilizing all created resources to simulate the users behavior and output the state into the consoles.

	@description
	This file is to be imported into an environment provisioned with all utilities found in `utils/`. The provisioning is to be done either through JSFiddle directly or in the `index.html` file.
**/


/**
	@constant
	@description define "visual_consoles" which can be used to output a visual response to users used to output data
**/
const visual_console = {
	output :  new Visual_Console(window.document.querySelector('#output')),
	status : new Visual_Console(window.document.querySelector("#status"))
};

/**
	@constant
	@description define which user to load data for; assume constant for this exercise
**/
const user_id = 1;

/**
	begin mimicing user behavior; create a anonymous async function in which we provision the "await" functionality; run it immediately
**/
(async function(){
	/**
		 1. click on a users profile. display:
			- the user's username
			- many posts, albums, and todos they have.
			- the titles of their five most recent posts
	**/
	visual_console.status.log("loading a users profile..."); // report that we are retreiving user data
	let user_data = await api.retreive_user(user_id); // retreive data from server
	visual_console.status.log("&nbsp;&nbsp;`-> completed ") // report data retreival succeeded

	// output users username and count of posts, albums, and todos
	visual_console.output.log(`${user_data.meta.username} has ${user_data.posts.length} posts, ${user_data.albums.length} albums, and ${user_data.todos.length} todos`)

	// output the 5 most recent posts;
	// 		ASSUMPTIONS:
	//			1. posts are always returned in order of `id` ascending; consequence: we dont have to sort posts data sent by server
	//			2. post id's are generated in ascending order, meaning higher post id -> more recent post; consequence: we dont need additional information to determine recency or sort by recency
	user_data.posts
		.slice(-5) // get the last 5 posts (i.e., the last 5 most recent posts - based on above assumptions)
		.forEach((post)=>{  visual_console.output.log(`&nbsp;&nbsp; \`-> post ${post.id}: "${post.title}"`) }) // output post title for each post


	/**
		2. after waiting a few seconds, click on the most recent post. display:
			- title,
			- body,
			- comments
	**/
	// wait for a few seconds
	visual_console.status.log(`waiting a few seconds before clicking on most recent post...`); // report that we are waiting
	await sleep(3000); // wait 3 seconds
	visual_console.status.log("&nbsp;&nbsp;`-> completed ") // report waiting has ended
	visual_console.output.log("..."); // distinguish next page visually

	// retreive the data
	let most_recent_post = user_data.posts.slice(-1)[0];
	visual_console.status.log(`loading data for post ${most_recent_post.id}...`); // report that we are retreiving post data
	let post_data = await api.retreive_post(most_recent_post.id); // retreive data from server
	visual_console.status.log("&nbsp;&nbsp;`-> completed ") // report data retreival succeeded

	// output  data
	visual_console.output.log(`Viewing post "${post_data.title}" (${post_data.comments.length} comments)`);
	visual_console.output.log(`&nbsp;&nbsp;\`-> "${post_data.body}"`);
	visual_console.output.log(`&nbsp;&nbsp;\`-> comments:`);
	post_data.comments.forEach((comment)=>{ // display each comment
		visual_console.output.log(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`-> comment ${comment.id} : "${comment.body}"`);
	})


	/**
		3. post a comment
	**/
	// send the post request
	visual_console.status.log(`user is posting a comment...`); // report that we are retreiving post data
	let response = await api.post_comment(most_recent_post.id, "Great post!"); // post the comment
	visual_console.status.log("&nbsp;&nbsp;`-> completed ") // report data retreival succeeded
	visual_console.output.log("..."); // distinguish next page visually

	// display the response
	visual_console.output.log(`You commented "${response.body}"`)
})();

/**
	Asynchronous sleep function
	@async
	@param {int} ms - how many ms to sleep
*/
function sleep(ms) { // note that we can define this function at the end of the script and the compiler will hoist it to the beginning of the scope
  return new Promise(resolve => setTimeout(resolve, ms));
}
