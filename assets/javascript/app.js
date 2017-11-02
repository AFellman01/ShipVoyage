// jQuery way
    $(document).ready(function() {
      //
      // $("#PostBtn")on("click", function() {
      //        alert('button clicked');
      //      }



           $('.post').on('click', function (){
var tracker = $('#track').val()
location.href = ("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracker )
console.log(tracker)

           });


           $('.parcel').on('click', function (){
             var tracker = $('#track').val()
location.href = ("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracker)

  });


          $('.fedex').on('click', function (){
            var tracker = $('#track').val()
location.href = ("https://www.fedex.com/apps/fedextrack/?tracknumbers" + tracker)
  });
});
