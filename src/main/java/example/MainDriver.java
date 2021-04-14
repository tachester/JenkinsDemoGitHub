package example;

import example.frontcontroller.FrontController;
import example.model.SuperHuman;
import example.service.SuperHumanService;
import example.service.SuperHumanServiceImpl;
import io.javalin.Javalin;


public class MainDriver {
    public static SuperHumanService shumanServ = new SuperHumanServiceImpl();

    public static void main(String[] args) {
        int myPort=9005;
        String myPortString = System.getenv("TRAINING_PORT");

        if(myPortString != null){
            myPort = Integer.parseInt(myPortString);
        }


        insertInitialValues();

        Javalin app = Javalin.create(

                config-> {
//                    config.enableCorsForOrigin("http://localhost:4200");
                }
        ).start(myPort);

        FrontController fc = new FrontController(app);
    }



    private static void insertInitialValues() {

        shumanServ.addSHuman(new SuperHuman("Fairy Valentine", "Telekinetic Armor", 0));
        shumanServ.addSHuman(new SuperHuman("Pastor", "Holy Water", 0));
        shumanServ.addSHuman(new SuperHuman("Khro", "Time Dilation", 260_000));
        shumanServ.addSHuman(new SuperHuman("Mars", "Sandstorm", 750_000));
    }
}
