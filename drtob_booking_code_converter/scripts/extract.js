



/* creates and attach iframe to document 
function createFrame() {

    return new Promise(function (resolve, reject) {
        let f = document.querySelector('#bgFrameDiv');
        if (f != null) {
            f.remove();
        }
        var bgFrameDiv = document.createElement('div');
        setAttributes(bgFrameDiv, {
            'width': '500px',
            'height': '500px',
            'id': 'bgFrameDiv'

        })

        var bgFrame = document.createElement('iframe');
        setAttributes(bgFrame, {
            'width': '100%',
            'height': '100%',
            'name': 'bgFrame',
            'src': 'https://vsagent.bet9ja.com/bet9ja-cashier-league/login/'
        });

        bgFrameDiv.appendChild(bgFrame);

        var bgFrame = document.body.appendChild(bgFrameDiv);

        resolve(bgFrame);

    });
}*/