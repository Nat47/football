
var teams = [];


//when click button add your teams 
$( "#submit" ).click(function() {
    //input new team members
    var newTeamMember = $("#add").val();
    // empty the team member input field
    $("#add").val('').removeAttr('checked').removeAttr('selected');
    //Cancel the default action (navigation) of the click.
    event.preventDefault();
    //pushes the new team members to teams array
    teams.push(newTeamMember);
    //prints the new team members to <div> output
    $( "<li>"+newTeamMember+"</li>").appendTo("#output");
});

//this function suffles an array
function shuffleTeams(array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var randomTeam = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var swap = array[counter];
        array[counter] = array[randomTeam];
        array[randomTeam] = swap;
    }
    return array;
}

// function to shuffle the array
$("#split").click(function() {
    $("#output1").empty();
    $("#output2").empty();

    event.preventDefault();

    var teamMember = [];

    $.each(teams, function(index, value) {
        //pushes each random team value to the empty array teamMember
        teamMember.push('<li>' + value + '</li>');
        $("#output").html(teamMember);
    });

    var newTeamslist = shuffleTeams(teams);
        // gets the team members total and divides it in half
        var teamLength =  Math.ceil(newTeamslist.length / 2);
        var team1 = newTeamslist.slice(0,teamLength);
        var team2 = newTeamslist.slice(teamLength);
        //output each value in team1
        team1.forEach(function(value) {
            $( "<li>"+value+"</li>").appendTo("#output1");
            
        }); 
        //output each value in team2
        team2.forEach(function(value) {
            $( "<li>"+value+"</li>").appendTo("#output2");
        });
     });
