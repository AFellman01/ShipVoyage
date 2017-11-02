// jQuery way
    $(document).ready(function() {

      // var tracker = $('#track').val();
      // var res = tracker.match  ('[0-9]{4} [0-9]{4} [0-9]{2}');




    $('.post').on('click', function (){
      var tracknum = $('#track').val();
      // var regex = new RegExp('^\\d+$');

      if (tracknum[0] === 'E') {
        console.log("Yo");
      }
      // first conditional tests for tracking numbers beginning with E

      //   //if the tracking number begins with E, then check if the next letter is A
      //   if (tracknum[1] === 'A'){
      //     console.log("A");
      //     window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, '_blank');
      //   }
      //   //if not A, then check if it's C
      //   else if (tracknum[1] === "C") {
      //     console.log("international");
      //     window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, '_blank');
      //   }
      //   //if not A or C, then it's not a valid USPS tracknum
      //   else {
      //     console.log("please enter a valid tracking number");
      //   }
      else if (tracknum[1] == 'Z'){
        window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracknum, '_blank');
      }
      else if (typeof(parseInt(tracknum,0)) === 'number') {
        console.log("Fuck yeah!");
      }
      else {
        console.log("Help!");
      }

// location.href = ("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracker )


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
// window.open("https://www.fedex.com/apps/fedextrack/?action=track&tracknumbers=" + tracker), '_blank'
//   });
// });

}); //document.ready
