
$(document).ready(function() {
    function snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });

        return returnArr;
    };
    //
    var config = {
      apiKey: "AIzaSyBEegnKfKyFre1F2RdNlst3u3r3N1LBfL0",
      authDomain: "ttbd-187222.firebaseapp.com",
      databaseURL: "https://ttbd-187222.firebaseio.com",
      projectId: "ttbd-187222",
      storageBucket: "ttbd-187222.appspot.com",
      messagingSenderId: "664449192290"
    };
    firebase.initializeApp(config);

    var twitterbase = firebase.database();

    var stats_db = twitterbase.ref('/stats/total/').on('value', function(snapshot){
        stats_array = snapshotToArray(snapshot)
        $('#total_tweets').text(stats_array[0])
        $('#time_wasted').text(stats_array[1])
        $('#tax_dollars').text(stats_array[3])
    });
    var tweet_db = twitterbase.ref('/tweets/').on('value', function(snapshot){
        tweet_array = snapshotToArray(snapshot)
        //console.log(snapshotToArray(snapshot));
        $('#example').DataTable({
            destroy: true,
            "scrollX": true,
            "order": [[ 5, "desc" ]],
            data: tweet_array,
            "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
            columns: [
                { title: "Tweet ID", "className": "dt-center", "targets": "_all"},
                { title: "Tweet Text", "className": "dt-center", "targets": "_all"},
                { title: "Favorite Count", "className": "dt-center", "targets": "_all"},
                { title: "Retweets", "className": "dt-center", "targets": "_all"},
                { title: "Hashtags", "className": "dt-center", "targets": "_all"},
                { title: "Date", "className": "dt-center", "targets": "_all"}
            ]
        });
    });
});
