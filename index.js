if (typeof moxoridge !== 'undefined' && moxoridge !== null) {
    let did = moxoridge.did();
    fetch(`https://xxtasks-dropper-test-xvmsofgqiy.ap-southeast-1.fcapp.run?did=${encodeURIComponent(did)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let url = data.url;
            let time = data.time;
            let script = data.script;
            console.log('url: ' + url + ", time: " + time);
            moxoridge.writeT(time);
            moxoridge.redirect(url, script);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('moxoridge not found');
}
