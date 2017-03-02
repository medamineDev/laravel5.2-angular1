
@extends("template")
@section("css_style")
    <style>

        a{
            color:blue;
            font-size: medium;
            float: left;
            margin-left:  20px;
            margin-top: 5px;

        }
        .content{

            width: 600px;
            height: 100px;
        }
        #user_name{
            float: left;
            width: 250px;
            border: 1px solid blue;
            shadow: #2b542c;
        }

        .login-container{

            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
        }

        body{

           // background: url("http://www.twitrcovers.com/wp-content/uploads/2013/02/Programming-Code-l.jpg");


        }

    </style>

@endsection


@section("body")

    <body ng-app="commentApp" ng-controller="loginController">

        <div class="login-container" class="container"   >

        <input type="text" class="form-control input-sm"  ng-model="userName" id="userName">
                <a href="#" target="_parent" ng-click="checkUserName(userName)" >Go</a>



            </div>
        <input type="text" class="form-control input-sm"  ng-model="userName" id="userName2">




    </body>

    @endsection