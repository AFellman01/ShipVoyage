$(document).ready(function() {
  var tracknum;
// I don't know what this does, but it is important!!!!!!!
  $(".post").on("click", function() {
    // this function activates the button on the front end.
      tracknum = $("#track").val();
// This assigns tracknum to the value inside the field.
      if (tracknum[0] === "E" && tracknum.length === 13) {
        window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, "_blank");
        // if the first letter is E, then it will check if the length is 13. If both are right, it will go to the USPS.
      } else if (tracknum[0] === "E" && tracknum.length != 13) {
        alert("Invalid Post Office Tracking Number");
        // if length is wrong, it will trigger this alert
      } else if (tracknum[1] === "Z" && tracknum.length == 18) {
        window.open("https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + tracknum, "_blank");
        // If the first letter is I, it will check to see if the length is 18. If it is, it will open UPS in a new tab.
      } else if (tracknum[1] === "Z" && tracknum.length != 18) {
        alert("Invalid UPS Tracking Number");
        // Otherwise, it triggers this alert.
      } else if (tracknum.length === 13 && tracknum[12] === "C" && tracknum[13] === "D") {
        window.open("https://www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber=" + tracknum, "_blank")
        // Sort of an easter egg. Totally untested. Probably broke all the other code.
      } else if (typeof(parseInt(tracknum, 0)) === "number") {
        // if all other conditions are not met, then it is run through the number parser.
        if (tracknum.length === 10) {
        window.open("http://www.dhl.com/en/express/tracking.html?AWB=" + tracknum, "_blank")
        // ten digits goes to DHL.
        } else if (tracknum.length === 12) {
        window.open("https://www.fedex.com/apps/fedextrack/?action=track&tracknumbers=" + tracknum, "_blank")
        // 12 digits to FedEx
      } else if (tracknum[0] === "9" && tracknum.length === 20) {
        window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + tracknum, "_blank")
        // Untested: 20 digits, starting with 9, goes to USPS again.
      } else if (tracknum.length != 10 && tracknum.length != 12 && tracknum.length != 20) {
        alert("Please enter a valid Tracking Number");
        // If all else fails, this alrt will be displayed.
      } else {
        console.log("Don't forget the else!");
      }
    }
  });
});
