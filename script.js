function onSignIn(googleUser) {
    var profile= googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function (){
        alert("You have been successfully signed out");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });
}