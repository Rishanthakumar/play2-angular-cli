package controllers;

import play.mvc.Result;



public class ServiceController extends BaseController {

    public Result helloWorldService() {
        return ok("Hello World");
    }

}
