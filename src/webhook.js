/* Brick : Webhook 
*/
(function (root) {

	/*
		Webhook component : Stamplay.Webhook 
		This class rappresent the Webhook Object component on Stamplay platform
		It very easy to use: Stamplay.Webhook([WebhookName])
	*/

	//constructor
	function Webhook(resourceId) {

		var resource = resourceId.replace(/[^\w\s]/gi, '').trim().toLowerCase().replace(/\s+/g, '_');

		this.url = '/api/webhook/'+ Stamplay.VERSION +'/'+resource+'/catch';
		
		this.post = function(data){
			return Stamplay.makeAPromise({
				method: 'POST',
				data: data,
				url: this.url
			})
		}

	}
	//Added Webhook to Stamplay 
	root.Stamplay.Webhook = Webhook;

})(this);