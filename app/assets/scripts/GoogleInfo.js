var auth2;

var initClient = function() {
		gapi.load('auth2', fucntion(){
			auth2=gapi.auth2.init({
				client_id: 'CLIENT_ID.apps.googleusercontent.com'
			});
			auth2.attachClickHandler('g-signin2' {}, onSuccess, onFailure);
		});
};

var onSuccess = function(user) {
	console.log('Signed in as ' + user.getbasicProfile()+get.Name());
	window.location.replace("https://ekillham.github.io/dashboard.html");
};

var onFailure = function(error) {
	console.log(error);
	window.location.replace("https://ekillham.github.io");
};