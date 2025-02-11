function fetchLastFm() {
    var user = document.getElementById("user");
    var api_key = "acfeec3209175b5e98742ef49241e75a";

    fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+user.value+'&api_key=' + api_key + '&format=json').then(response => {
        return response.json();
    }).then(data => {
        console.log("Success");
        var table = document.getElementById("lastFmData");
        var noOfTracks = data.recenttracks.track.length;
        for (i = 0; i < noOfTracks; i++) {
            var array_no = i;
            var artist = data.recenttracks.track[i].artist["#text"];
            var image = data.recenttracks.track[i].image[0]["#text"];
            var album = data.recenttracks.track[i].album["#text"];
            var music_name = data.recenttracks.track[i].name;
            var url = data.recenttracks.track[i].url;
            table.innerHTML = table.innerHTML + '<tr><td><img src="' + image + '" alt="Album Art"></td><td>' + music_name + '</td><td>' + album + '</td><td>' + artist + '</td><td>Time</td><td><a href="' + url + '">Click Me</a></td></tr>';
        }
    }).catch(err => {
        console.error(err);
    });
}