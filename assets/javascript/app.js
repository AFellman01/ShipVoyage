// jQuery way
    $(document).ready(function() {
      //
      // $("#PostBtn")on("click", function() {
      //        alert('button clicked');
      //      }
var trackNums = function() {
document.getElementById('#track').value;

};

           $('.post').on('click', function (){
location.href = ("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + trackNums)
           });


           $('.parcel').on('click', function (){
location.href = ("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + "")
  });


          $('.fedex').on('click', function (){
location.href = ("https://www.fedex.com/apps/fedextrack/?tracknumbers" + "")
  });
});
