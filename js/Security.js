class Security {
    constructor() {
        this.access1 = createInput("")
        this.access1.position(50,140);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(50,170);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("")
        this.access2.position(250,350);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(250,380);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("")
        this.access3.position(450,140);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(450,170);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("")
        this.access4.position(650,350);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(650,380);
        this.button4.style('background', 'lightgrey');
        
        this.access5 = createInput("")
        this.access5.position(850,140);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(850,170);
        this.button5.style('background', 'lightgrey');

//add code for creating and positioning the third input box and button        
    }
    display() {
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
    }
}