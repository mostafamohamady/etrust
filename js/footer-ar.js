document.write(`

<footer role='contentinfo' class='py-3 ftrbdr'>
<div class='container'>
    <div class='row'>
        <div class='col-md-3 '>
            <div class='row'>
                <div class='col-12'>
                    <h4 class='h6 ftrlink'>التنقل</h4>
                    <ul class='list-unstyled'>
                        <li><a href='index-ar.html' class='ftrfont'>الرئيسية</a></li>
                        <li><a href='demo-ar.html' class='ftrfont'>تجريبي</a></li>
                        <li><a href='contactus-ar.html' class='ftrfont'>اتصل بنا </a></li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="col-md-6 align-self-center ">
            <p class="copyright"> جميع الحقوق محفوظ &copy; eTrust 2020 </p>
        </div>
        <div class='  logo-c '>

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
            <h5 class="modal-title" id="exampleModalCenterTitle">تسجيل الدخول</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="signin-form">
                <form class="form signin-form">

                    <div class="form-group  ">
                        <label for="signin_mail">البريد الإلكترونى</label>
                        <input type="text" name="signin_mail" id="signin_mail" class="form-control" value="" />
                    </div>
                    <div class="form-group  ">
                        <label for="signin_password">كلمة المرور</label>
                        <input type="password" name="sign_password" id="signin_password" class="form-control"
                            value="" />
                    </div>

                    <div class="form-group text-center">
                        <button type="submit" name="sign-in" class="btn btn-success ">
                            دخول
                        </button>
                    </div>
                </form>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
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
            <h5 class="modal-title" id="exampleModalCenterTitle">حساب جديد</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="signup-form">
                <form class="form signup-form">
                    <div class="form-group">
                        <label for="Username">اسم المستخدم </label>
                        <input type="text" name="Username" id="Username" class="form-control" value="" />
                    </div>
                    <div class="form-group">
                        <label for="Organization_name">اسم المؤسسة</label>
                        <input type="text" name="Organization_name" id="Organization_name" class="form-control"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_Email">البريد الإلكتروني</label>
                        <input type="text" class="form-control" name="company" id="signup_Email" value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_phone"> رقم الهاتف</label>
                        <input type="text" class="form-control" name="signup_phone" id="signup_phone"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_password"> كلمة المرور</label>
                        <input type="text" class="form-control" name="signup_password" id="signup_password"
                            value="" />
                    </div>
                    <div class="form-group">
                        <label for="signup_repassword">اعادة كلمة المرور</label>
                        <input type="text" class="form-control" name="signup_repassword" id="signup_repassword"
                            value="" />
                    </div>

                    <div class="form-group text-center ">
                        <button type="submit" name="sign-in" class="btn btn-success ">
                            سجل
                        </button>
                    </div>
                </form>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
        </div>
    </div>
</div>
</div>
<!-- register pop-up -->

`);
