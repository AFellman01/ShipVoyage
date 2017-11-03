// jQuery way
    $(document).ready(function() {

      // var tracker = $('#track').val();
      // var res = tracker.match  ('[0-9]{4} [0-9]{4} [0-9]{2}');




    $('.post').on('click', function (){
      var tracknum = $('#track').val();
      // var regex = new RegExp('^\\d+$');


      // first conditional tests for tracking numbers beginning with E
      if (tracknum[0] === 'E') {
        console.log("USPS")
          window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, '_blank');
  }
      else if (tracknum[1] == 'Z'){
        console.log("UPS")
        window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracknum, '_blank');
      }
      else if (typeof(parseInt(tracknum,0)) === 'number') {
      console.log("FedEX")
      window.open("https://www.fedex.com/apps/fedextrack/?action=track&tracknumbers=" + tracknum, '_blank')
      }
      else {
        console.log("Help!");
      }




    });//.post onclick

//
//
//            $('.parcel').on('click', function (){
//              var tracker = $('#track').val()
//
//
//   });
//
//
//           $('.fedex').on('click', function (){
//             var tracker = $('#track').val()
//
//   });
// });

}); //document.ready
