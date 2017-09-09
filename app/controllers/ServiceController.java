package controllers;

import play.mvc.Result;



public class ServiceController extends BaseController {

    public Result Test() {
        return ok("ok");
    }

}
