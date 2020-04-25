var iterator = 0;
var custDialogueLines = 
    [
    "No… I’m usually very careful with my devices. It will only stay in my home office.", 
    "Just simple things, like uploading my Photos to share with my family members. Sometimes I also like to use iMovie to create little home movies from vacation family footage. Oh, I’ll need to set up my printer with my computer, though… I’m nervous about doing that.", 
    "Oh, really? That would actually be very helpful. I don’t want to bother my kids too much, especially since they can’t come and help me in person.", 
    "Oh, great! I think you’ve convinced me… this sounds like it would be very helpful for me." ];

var appleDialogueLines = 
    [
        "That’s great! AppleCare+ offers more than just coverage for accidental damage, though. What do you plan on using your MacBook Air for?",
        "Totally understandable. Hooking up two different pieces of hardware, oftentimes with different operating systems, can be confusing. Just to let you know, AppleCare+ also offers 24/7 priority access to Apple experts by chat or phone. Those Apple experts can also guide you through setting up things like printers and AirPort networks.",
        "Totally! If you’re using your device to help run your business, I can also sign you up for Business at Apple. It’s completely free and works for small or large businesses. When you’re a business with Apple, when you call Apple experts, you’ll get to see someone even sooner."
    ]

    
    var customer = document.querySelector(".customer");
    var apple = document.querySelector(".apple");

    customer.addEventListener("click", function() {
        document.getElementById("customerDialogue").innerHTML = custDialogueLines[iterator];
        if (iterator < custDialogueLines.length) {
            iterator++;
         } else {
             iterator = 0;
             document.getElementById("customerDialogue").innerHTML = "Hello! I'll be purchasing this new Macbook Air.";
            }
       } 
);

    apple.addEventListener("click", function(){
        document.getElementById("appleDialogue").innerHTML = appleDialogueLines[iterator];
        if (iterator < appleDialogueLines.length) {
            iterator++;
        } else {
            iterator = 0;
            document.getElementById("appleDialogue").innerHTML = "Great! Have you thought about purchasing AppleCare+ with your new device?";
        }
    })


