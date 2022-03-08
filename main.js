Webcam.set({
    width=300,
    height=350,
    image_format="png",
     png_quality:90
});

Getd=document.getElementById("div1");
Webcam.attach("#div1");
function snap_shot() {
    Webcam.snap( function (image_source) {
        document.getElementById("attach").innerHTML="<img id='img123' src='"+image_source+"'/>"
    });
  }
  console.log("ml5 version -" ,ml5.version );
  ml54=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0mHchGiYz/model.json",model_loaded);
 function model_loaded() {
  console.log("model has been loaded");
 }
 function check() {
    getI2=document.getElementById("img123");
    model.classify(getI2,gotresult);
  }
  function gotresult (error,results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      document.getElementById("span1").innerHTML=results[0].label;
      document.getElementById("span2").innerHTML=results[0].confidence.toFixed(3);
      
    }
  }