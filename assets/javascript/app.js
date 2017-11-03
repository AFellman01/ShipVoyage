// jQuery way
    $(document).ready(function() {

      // var tracker = $('#track').val();
      // var res = tracker.match  ('[0-9]{4} [0-9]{4} [0-9]{2}');




    $('.post').on('click', function (){
      var tracknum = $('#track').val();
      // var regex = new RegExp('^\\d+$');
console.log(tracknum.length)

      // first conditional tests for tracking numbers beginning with E
      if (tracknum[0] === 'E') {
        console.log("USPS")
          window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, '_blank');
        }
      else if (tracknum[1] === 'Z'){
        console.log("UPS")
        window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracknum, '_blank');
      }
      else if (tracknum[0] === 'T'){
        console.log("Amazon")
        alert("Please Enter Valid Tracking Number")
      }
      else if (typeof(parseInt(tracknum,0)) === 'number') {
      console.log("Number")

      if (tracknum.length === 10){
      console.log("DHL")
window.open("http://www.dhl.com/en/express/tracking.html?AWB=" + tracknum, '_blank')
      }
      else if (tracknum.length === 12){
      console.log("fedex")
      window.open("https://www.fedex.com/apps/fedextrack/?action=track&tracknumbers=" + tracknum, '_blank')
      }
}

});

      // 
      // }
      //
      // if (localStorage){
      //   $('.post').on('click', function (){
      //   sessionStorage.setItem(tracknum, "carrier");
      //   document.getElementById("result").innerHTML = "You have clicked the button " +
      //   sessionStorage.clickcount + " time(s) in this session.";
      //
      //     // Code for localStorage/sessionStorage.
      //
      //
      // } else {
      //     // Sorry! No Web Storage support..
      // }



}); //document.ready
