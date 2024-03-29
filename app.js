   var numSquares = 6;
 var colors = [];
  var pickedColor;
  var squares = document.querySelectorAll(".square");
  var colorDisplay = document.getElementById("colorDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var modeButtons= document.querySelectorAll(".mode");

  Init();

    function Init(){
        //mode button listerners
        setUpModeButtons();
        setupSquares();
      reset(); 
    }
 
    function setUpModeButtons(){
         for(var i = 0; i< modeButtons.length; i++){ 
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove(  "selected");    
         this.classList.add("selected");
         this.textContent === "Easy"? numSquares = 3:numSquares =6;
         reset();
      });
    }
  }

  function setupSquares(){
    for(var i =0; i< squares.length; i++ ){
        //add quick listener to  squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
           //compare color to pickedcolor
           if(clickedColor === pickedColor){
               messageDisplay.textContent ="Correct";
               resetButton.textContent ="play Again?"
               changeColors(clickedColor);
               h1.style.background = clickedColor;
           }else{
               this.style.background = "#232323";
              messageDisplay.textContent = "try Again";      
           }
        }); 
    }
  }

    
 
        function reset(){
            colors = generateRandomColors(numSquares);
            //pick anew random color from array
             pickedColor = pickColor();
             colorDisplay.textContent = pickedColor;
             messageDisplay.textContent ="";
             resetButton.textContent ="New Colors";
            // change colors of squares
            for(var i = 0; i < squares.length; i++){
                if(colors[i]){
            squares[i].style.display ="block";        
            squares[i].style.background = colors[i];
                } else{
            squares[i].style.display ="none";
                }
                
            }
            h1.style.background ="steelblue";  
        }     

  resetButton.addEventListener("click", function(){
      reset();
      })
  function changeColors(color){
      //loop through all square
      for(var i = 0; i< squares.length;i++){
      squares[i].style.background = color;
      }
  } 

  function pickColor(){
       var random  = Math.floor(Math.random()*colors.length);
      return colors[random];
  } 
  function generateRandomColors(num){
      //make an array
      var arr = []
      //repeat num times
      for(var i =0; i < num; i++){
          //get random color and push into arr
          arr.push(randomColor())
      }
      //return that array 
      return arr;
  }

  function randomColor(){
      //pick a "red" from 0 - 255
      var r  = Math.floor(Math.random() * 256);
      // pick a "green" from 0 -255
      var g  = Math.floor(Math.random() * 256); 
      // pick a "blue" from 0-255
      var b  = Math.floor(Math.random() *256 );
      return "rgb(" + r +", " + g + ", " + b +")";

  }