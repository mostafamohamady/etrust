document.write(`
<footer role='contentinfo' class='py-3 ftrbdr'>
<div class='container'>
    <div class='row'>
        <div class='col-md-3 '>
            <div class='row'>
                <div class='col-md-3 col-sm-6'>
                    <h4 class='h6 ftrlink'>Navigation</h4>
                    <ul class='list-unstyled'>
                        <li><a href='index.html' class='ftrfont'>Home</a></li>
                        <li><a href='demo.html' class='ftrfont'>Demo</a></li>
                        <li><a href='services.html' class='ftrfont'>contactus</a></li>

                    </ul>
                </div>

            </div>
        </div>
        <div class="col-md-6 align-self-center ">
            <p class="copyright"> Copyright to eTrust &copy; 2020 All Right Reserved. </p>
        </div>
        <div class='col-md-3  logo-c '>

            <a class='navbar-brand p-0' href='index.html'>
                <img src='img/mainlogo.png' alt='ISnSC' title='ISnSC'>
            </a>

        </div>
    </div>

</div>
</footer>
<!-- login pop-up -->
<div class="modal fade modal--signin" id="signInModal" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Sign In</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="signin-form">
                <form class="form signin-form" action="signin.php">
                    <div class="form-group  ">
                        <label for="signin_mail">Email Address</label>
                        <input type="text" name="signin_mail" id="signin_mail" class="form-control" value="" />
                    </div>
                    <div class="form-group  ">
                        <label for="signin_password">Your password</label>
                        <input type="password" name="sign_password" id="signin_password" class="form-control"
                            value="" />
                    </div>

                    <div class="form-group text-center">
                        <button type="submit" name="sign-in" class="btn btn-success ">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
<!-- //login pop-up -->
<!-- register pop-up -->
<div class="modal fade modal--signup" id="signUpModal" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="signup-form">
                <form class="form signup-form" action="signup.php">
                    <div class="form-group">
                        <label for="Username">Username</label>
                        <input type="text" name="Username" id="Username" class="form-control" value="" />
                    </div>
                    <div class="form-group">
                        <label for="Organization_name">Organization name</label>
                        <input type="text" name="Organization_name" id="Organization_name" class="form-control"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_Email">Email address</label>
                        <input type="text" class="form-control" name="company" id="signup_Email" value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_phone"> Your phone number</label>
                        <input type="text" class="form-control" name="signup_phone" id="signup_phone"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_password"> password</label>
                        <input type="text" class="form-control" name="signup_password" id="signup_password"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_repassword">Re-type-password</label>
                        <input type="text" class="form-control" name="signup_repassword" id="signup_repassword"
                            value="" />
                    </div>

                    <div class="form-group text-center ">
                        <button type="submit" name="sign-in" class="btn btn-success ">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
<!-- register pop-up -->


`);
