app.controller('loginController', function ($scope) {
    $scope.signInMessage = "Please sign in with your email and password.";
    $scope.isSignedIn = false;
    $scope.welcomeMessage = "";
    $scope.form = {};
    $scope.signedUp = false;
    $scope.signedOut = false;
    $scope.signedOutMessage = "";
    $scope.user = {
        email: "",
        password: ""
    };
    $scope.invalidCredentials = false;

    const adminCredentials = {
        email: "admin@test.com",
        password: "password"
    }

    $scope.login = function () {
        if ($scope.loginForm.$valid) {
            if ($scope.user.email === adminCredentials.email && $scope.user.password === adminCredentials.password) {
                $scope.isSignedIn = true;
                $scope.welcomeMessage = "Welcome back, Admin!";
                $scope.invalidCredentials = false;
            } else {
                $scope.isSignedIn = false;
                $scope.invalidCredentials = true;
            }

        }
    };

    $scope.submitInfo = function () {
        $scope.signedUp = true;
        const formData = $scope.form;
        console.log(formData);
    }

    $scope.signOut = function () {
        $scope.signedOut = true;
        $scope.signedOutMessage = "You have been signed out.";
        $scope.isSignedIn = false;
        $scope.user = {};
    };
});
