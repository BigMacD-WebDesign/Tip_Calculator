//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = docu9ment.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

        //Validate input
        if (billAmt === "" || serviceQual == 0) {
            alert("Please enter values");
            return;
        }
}