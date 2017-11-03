$(document).ready(function() {
  var tracknum;

  $(".post").on("click", function() {
    tracknum = $("#track").val();

    if (tracknum[0] === "E") {
      console.log("USPS")
      window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, "_blank");
      if (localStorage) {
        document.getElementById("postStoreInfo").innerHTML = ("Tracking Number " +
          tracknum + " is from the Post Office.")
      }
    } else if (tracknum[1] === "Z") {
      console.log("UPS")
      window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracknum, "_blank");
      if (localStorage) {
        document.getElementById("upsStoreInfo").innerHTML = ("Tracking Number " +
          tracknum + " is from UPS" )
      }
    } else if (tracknum[0] === "T") {
      console.log("Amazon")
      if (localStorage) {
        document.getElementById("errorInfo").innerHTML = ("Tracking Number " +
          tracknum + " is from Amazon. Go to their site to view it. ")
      }
    } else if (typeof(parseInt(tracknum, 0)) === "number") {

      if (tracknum.length === 10) {
        console.log("DHL")
        window.open("http://www.dhl.com/en/express/tracking.html?AWB=" + tracknum, "_blank")
        if (localStorage) {
          document.getElementById("dhlStoreInfo").innerHTML = ("Tracking Number " +
            tracknum + " is from DHL ")
        }
      } else if (tracknum.length === 12) {
        console.log("fedex")
        window.open("https://www.fedex.com/apps/fedextrack/?action=track&tracknumbers=" + tracknum, "_blank")
        if (localStorage) {
          document.getElementById("fedexStoreInfo").innerHTML = ("Tracking Number " +
            tracknum + " is from FedEX ")
        }
      }
    }
  });
});
