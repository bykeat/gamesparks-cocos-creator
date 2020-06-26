// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GSHK = null;
cc.Class({
    extends: cc.Component,
    gamesparkse: null,
    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        GSHK = new window.GameSparks();
        GSHK.initPreview({
            key:'d392632sEy43',
            secret: 'yAUzMkwAauXrqpATEcCz168Md9sfu5VM',
            onNonce: this.onNonce,
            onInit: this.initGS,
            onMessage: this.onMessage,
            logger: console.log,
        });
        console.log("GS", GSHK);
    },
    onNonce(nonce){
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, 'yAUzMkwAauXrqpATEcCz168Md9sfu5VM'));
    },
    initGS() {
        
        console.log("GS inited", GSHK);
    },
    onMessage(message){
        console.log(JSON.stringify(message));
    },
    authenticateGS() {
        GSHK.authenticationRequest("hk", "hk", this.loginResponse);
    },
    loginResponse(response) {
        console.log(JSON.stringify(response));

    },
    sendMatchmakingRequest() {
		GSHK.sendWithData("MatchmakingRequest",
	    	{
	            skill: 1,
	            matchShortCode: "Match_STD"
	        },
	        function(response) {
	        	if (response.error) {
					console.error(JSON.stringify(response.error));
				} else {
					console.log("Match OK...");
				}
	        }
	    );
	}
    // update (dt) {},
});
