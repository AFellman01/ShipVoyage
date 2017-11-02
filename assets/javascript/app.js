// jQuery way
    $(document).ready(function() {
      //
      // $("#PostBtn")on("click", function() {
      //        alert('button clicked');
      //      }



           $('.post').on('click', function (){
var tracker = $('#track').val()
// location.href = ("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracker )
window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracker, '_blank');

           });


           $('.parcel').on('click', function (){
             var tracker = $('#track').val()
window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracker, '_blank')

  });


          $('.fedex').on('click', function (){
            var tracker = $('#track').val()
window.open("https://www.fedex.com/apps/fedextrack/?tracknumbers" + tracker), '_blank'
  });
});
