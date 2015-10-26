exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

		var promise = new Promise(function(resolve, reject) {
			resolve(value);
		});

		return promise;
  },

  manipulateRemoteData : function(url) {

		var promise = new Promise(function(resolve, reject) {

			$.get(url).then(function(data){

				var people = data.people.map(function(person){
					return person.name;
				});
				// resolve sorted response
				resolve(people.sort());
			});
		});

		return promise;
  }
};
